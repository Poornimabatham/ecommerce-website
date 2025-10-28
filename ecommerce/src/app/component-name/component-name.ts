import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductDetailsComponent } from '../product-details-component/product-details-component';

@Component({
  selector: 'app-component-name',
  imports: [],
  templateUrl: './component-name.html',
  styleUrl: './component-name.css',
})
export class ComponentName {
    bsModalRef?: BsModalRef;
  showEducation = false;

 constructor(private modalService: BsModalService
  ) { }
  
  openFormModal() {
    this.bsModalRef = this.modalService.show(ProductDetailsComponent, {

   class: 'modal-lg', // optional for size
      initialState: {
        // ✅ You can pass data to modal component here
        product: {
          id: 1,
          title: 'Demo Product',
          description: 'This is a sample product displayed on explore page.'
        }
      }
      });
  }
}
