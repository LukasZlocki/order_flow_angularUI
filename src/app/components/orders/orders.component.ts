import { Component } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Order[] = [
    {
      id: '1',
      ordernb: '12345678',
      quantity: '20'
    },
    {
      id: '2',
      ordernb: '23456789',
      quantity: '40'
    },
    {
      id: '3',
      ordernb: '34567890',
      quantity: '10'
    }
  ];
}
