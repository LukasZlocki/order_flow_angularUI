import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderReadDto } from 'src/app/models/orderReadDto';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
  newOrder: OrderReadDto = {
    id: '',
    orderNumber: 0,
    quantity: 0,
    productNumber: ''
  };

  constructor(private orderService: OrdersService, private router: Router) {}
  
  addOrder() {
    this.orderService.addOrder(this.newOrder)
      .subscribe({
        next: (order) => {
          this.router.navigate(['order']);
        },
        error: (response) => {
          console.log(response);
        }    
      });
  }
}
