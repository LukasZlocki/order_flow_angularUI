import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderWriteDto } from 'src/app/models/orderWriteDto.model';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
    updateOrderRequest: OrderWriteDto = {
      orderNumber: 0,
      quantity: 0,
      productNumber: ''
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id) {
          this.orderService.getOrder(id)
            .subscribe({
              next: (response) => {
                this.updateOrderRequest = response;
              }
            });
        }
      }
    })
  }

  constructor(private router: Router,
    private orderService: OrdersService,
    private route: ActivatedRoute) {}
  updateOrder() {

  }
}
