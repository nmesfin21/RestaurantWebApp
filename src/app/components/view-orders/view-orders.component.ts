import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/interfaces/menuItem';
import { IOrder } from 'src/app/interfaces/order';
import { OrderServiceService } from 'src/app/services/orderService/order-service.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders: IOrder[]
  constructor(private orderService: OrderServiceService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

}
