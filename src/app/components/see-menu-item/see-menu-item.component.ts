import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/orderService/order-service.service';
import { IMenuItem } from 'src/app/interfaces/menuItem';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-see-menu-item',
  templateUrl: './see-menu-item.component.html',
  styleUrls: ['./see-menu-item.component.css']
})
export class SeeMenuItemComponent implements OnInit {
  menues : IMenuItem[]
  private menuItemSub: Subscription;

  constructor(private orderService: OrderServiceService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(){
    this.orderService.getMenues().subscribe(
      response =>{
        this.menues = response.menuItems;
      }
    );
  }

  

  ngOnDestroy(){
    this.menuItemSub.unsubscribe();
  }

}
