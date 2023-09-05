import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderWriteDto } from 'src/app/models/orderWriteDto.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
  newOrder: OrderWriteDto = {
    orderNumber: '',
    quantity: ''
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
