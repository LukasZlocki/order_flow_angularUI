import { OrderWriteDto } from 'src/app/models/orderWriteDto.model';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  getOrder(id: string): Observable<OrderWriteDto> {
    return this.http.get<OrderWriteDto>(this.baseApiUrl + '/api/order/' + id);
  }

  updateOrder(id: string, updateOrderRequest: OrderWriteDto): Observable<OrderWriteDto> {
    return this.http.put<OrderWriteDto>(this.baseApiUrl + '/api/order/' + id, updateOrderRequest);
  }
}
