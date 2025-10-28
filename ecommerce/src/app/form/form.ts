import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true, // ✅ Required when using imports array directly
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  contactForm: FormGroup;

  // Dropdown options
  countries = [
    { label: 'India', value: 'IN' },
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Canada', value: 'CA' },
    { label: 'Australia', value: 'AU' },
  ];

  constructor(private fb: FormBuilder) {
    // Initialize form
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      MiddleName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message: [''],
      country: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Form submitted successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
