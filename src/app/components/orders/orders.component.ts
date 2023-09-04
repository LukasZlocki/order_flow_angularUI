import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders: Order[] = [];

  constructor(private OrdersService: OrdersService, private router: Router) {}
  ngOnInit(): void {
    this.OrdersService.getAllOrders()
      .subscribe({
        next: (orders) => {
          this.orders = orders;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}
