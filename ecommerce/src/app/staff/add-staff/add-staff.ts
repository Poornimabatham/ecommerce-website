import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StaffService } from '../../services/staff.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',

  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-staff.html',
  styleUrls: ['./add-staff.css'], // ✅ fix here
})
export class AddStaff implements OnInit {
  staffForm!: FormGroup;
  loading = false;
  success = '';
  error = '';
  roles: any[] = []; // store roles
  staffId: string = '';
  isEditMode: boolean = false;
  showManagerDropdown = false;


  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private route: ActivatedRoute,
    private router: Router // ✅ inject Router
  ) {}

  ngOnInit(): void {
    this.staffId = this.route.snapshot.paramMap.get('id') || '';
    this.isEditMode = !!this.staffId;
    this.staffForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // email validation
      phone: ['', Validators.required],
      role: ['', Validators.required], // ✅ added role
    managerRole: [''],

    });

   // load roles first
  this.staffService.getRole().subscribe({
    next: (data) => {
      this.roles = data;

      // listen for changes once roles are loaded
      this.staffForm.get('role')?.valueChanges.subscribe(value => {
        const selectedRole = this.roles.find(r => r._id === value);
        const managerRoleControl = this.staffForm.get('managerRole');

        if (selectedRole && selectedRole.name === 'Manager') {
          this.showManagerDropdown = true;
          managerRoleControl?.setValidators([Validators.required]);
        } else {
          this.showManagerDropdown = false;
          managerRoleControl?.clearValidators();
          managerRoleControl?.setValue('');
        }
        managerRoleControl?.updateValueAndValidity();
      });
    },
  });
    this.staffService.getRole().subscribe({
      next: (data) => {
        this.roles = data;
        console.log(this.roles);
         // Check if Manager role exists in the response
  
      },
    });
    if (this.staffId) {
      this.staffService.getStaffById(this.staffId).subscribe({
        next: (data) => {
          this.staffForm.patchValue({
            name: data.name,
            email: data.email,
            phone: data.phone,
            role: typeof data.role === 'object' ? data.role._id : data.role, // 👈 use ID
                      managerRole: data.managerRole || ''

          });
        },
      });
    }
  }

  get roleControl() {
  return this.staffForm.get('role')?.value;
}


  onSubmit() {
    if (this.staffForm.valid) {
      this.loading = true;
      this.success = '';
      this.error = '';
      if (this.isEditMode) {
        this.staffService.updateStaff(this.staffId, this.staffForm.value).subscribe({
          next: () => {
            this.loading = false;
            this.success = 'Staff updated successfully';
            this.error = '';
            this.router.navigate(['/stafflist']); // ✅ redirect after update
          },
          error: () => {
            this.loading = false;
            this.error = 'Error updating staff';
          },
        });
      } else {
        this.staffService.addStaff(this.staffForm.value).subscribe({
          next: () => {
            this.loading = false;
            this.success = 'Staff added successfully';
            this.error = '';
            this.router.navigate(['/stafflist']); // ✅ redirect after update
          },
          error: () => {
            this.loading = false;
            this.success = '';
            this.error = 'Error adding staff';
          },
        });
      }
    }
  }
}
