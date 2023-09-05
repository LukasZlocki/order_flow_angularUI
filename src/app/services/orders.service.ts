import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrderWriteDto } from '../models/orderWriteDto.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseApiUrl: string = "http://localhost:6001";
  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseApiUrl + '/api/order');
  }

  addOrder(newOrder: OrderWriteDto): Observable<OrderWriteDto> {
    return this.http.post<OrderWriteDto>(this.baseApiUrl + "/api/addorder", newOrder);
  }
}
