import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users.model';
import { CommonModule, SlicePipe } from '@angular/common'; // <-- Import SlicePipe

@Component({
  selector: 'app-users',
  standalone: true,                // standalone component
  imports: [CommonModule, SlicePipe], // <-- Add SlicePipe here
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent implements OnInit {
  products: Users[] = [];
  paginatedProducts: Users[] = [];

  // Pagination variables
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
        this.setPage(1);
      },
      error: (error) => console.error(error)
    });
  }

  setPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  onImageError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = 'assets/default.png';
  }
}
