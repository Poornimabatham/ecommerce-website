import { Routes } from '@angular/router';
import { App } from './app';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Navbar } from './navbar/navbar';
import { AddStaff } from './staff/add-staff/add-staff';
import { StaffList } from './staff/staff-list/staff-list';
import { Dashboard } from './dashboard/dashboard';
import { UsersComponent } from './users/users';
import { Form } from './form/form';
import { ComponentName } from './component-name/component-name';
export const routes: Routes = [
  { path: '', component: Signup }, // default route (signup)
  { path: 'login', component: Login },
  { path: 'navbar', component: Navbar },
  { path: 'addstaff', component: AddStaff },
  { path: 'staff/edit/:id', component: AddStaff }, // Edit staff route
  { path: 'stafflist', component: StaffList },
  { path: 'dashboard', component: Dashboard },
  { path: 'users', component: UsersComponent },
  { path: 'form', component: Form },
  { path: 'explore', component: ComponentName },





  { path: '**', redirectTo: '' }, // fallback
];
