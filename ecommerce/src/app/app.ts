import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Signup } from './signup/signup';
import { Cards } from './cards/cards';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ RouterModule, RouterOutlet ,Navbar,CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce');
    isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  showContactSubmenu = false; // 👈 submenu toggle variable

  toggleContactSubmenu() {
    this.showContactSubmenu = !this.showContactSubmenu;
  }
}
