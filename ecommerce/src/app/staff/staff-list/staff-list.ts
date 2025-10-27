import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../models/staff.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff-list',
  imports: [CommonModule],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.css'
})
export class StaffList implements OnInit{
  staffList: Staff[]=[]
  constructor(private staffService: StaffService,private router:Router) { }
  // rolesMap :{[key:string]:string}={};
  ngOnInit(): void {
  //     this.staffService.getRole().subscribe({
  //   next: (roles: any[]) => {
  //     roles.forEach(role => {
  //       this.rolesMap[role._id] = role.name;
  //     });
  //     console.log('Roles Map:', this.rolesMap);
  //   }
  // });
    this.staffService.getStaff().subscribe({
      next:(data:Staff[])=>{
        console.log(data,"err")
        this.staffList=data
      }
    })
  }

  async gotodashboard() {
    this.router.navigate(['/dashboard'])
  }
  editStaff(id: string) {
    this.router.navigate(['/staff/edit', id]);
  }
  deleteStaff(id: string) {
    this.staffService.deleteStaff(id).subscribe({
      next: () => {
        this.staffList = this.staffList.filter(staff => staff._id !== id);
      }
    })
  }
}
