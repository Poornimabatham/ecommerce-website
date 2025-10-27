import { Component, EventEmitter, Output, output } from '@angular/core';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-navbar',
  imports: [Cards],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();
}
