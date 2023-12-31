import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';

import { HttpClientModule } from '@angular/common/http';
import { AddOrderComponent } from './components/add-order/add-order.component'
import { FormsModule } from '@angular/forms';
import { EditOrderComponent } from './components/edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    AddOrderComponent,
    EditOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
