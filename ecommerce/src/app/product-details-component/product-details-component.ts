import { CommonModule, DatePipe } from '@angular/common';
import { Component,Input  } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-details-component',
  imports: [CommonModule,DatePipe],
  templateUrl: './product-details-component.html',
  // styleUrl: './product-details-component.css',
 
  styles: [`
    .modal-body img { max-height: 250px; object-fit: cover; width: 100%; }
  `]
})
export class ProductDetailsComponent {
    @Input() product: any;
  constructor(public bsModalRef: BsModalRef) {}

}
