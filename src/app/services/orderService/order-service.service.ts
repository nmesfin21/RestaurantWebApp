import { Injectable } from '@angular/core';
import { IMenuItem } from 'src/app/interfaces/menuItem';
import { IOrder } from 'src/app/interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private menues : IMenuItem[] = [
    {Name: 'first food', Price: 10, ImagePath: "../../../assets/images/beyaynet.jpg", Description: "some description"},
    {Name: 'second food', Price: 10, ImagePath: "../../../assets/images/doro.jpg", Description: " second description"},
    {Name: 'third food', Price: 10, ImagePath: "../../assets/images/kitfo.jpg", Description: " second description"},
    {Name: 'third food', Price: 10, ImagePath: "../../assets/images/shiro.jpg", Description: " second description"},
    {Name: 'third food', Price: 10, ImagePath: "../../assets/images/tibs.jpg", Description: " second description"}
  ]

  private orders: IOrder[] =[
    {OrderId: 1, Name: 'first food', Time: new Date()}
  ]

  constructor() { }

  getMenues(){
    return [...this.menues];
  }

  addMenue(menu: IMenuItem){
    this.menues.push(menu);
  }

  addOrder(order: IOrder){
    this.orders.push(order);
  }

  getOrders(){
    return [...this.orders];
  }
}
