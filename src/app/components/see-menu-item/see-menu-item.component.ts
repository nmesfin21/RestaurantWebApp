import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/orderService/order-service.service';
import { IMenuItem } from 'src/app/interfaces/menuItem';


@Component({
  selector: 'app-see-menu-item',
  templateUrl: './see-menu-item.component.html',
  styleUrls: ['./see-menu-item.component.css']
})
export class SeeMenuItemComponent implements OnInit {
  menues : IMenuItem[]
  constructor(private orderService: OrderServiceService) { }

  ngOnInit() {
    this.menues = this.orderService.getMenues();
  }

}
