import { Injectable } from '@angular/core';
import { IMenuItem } from 'src/app/interfaces/menuItem';
import { IOrder } from 'src/app/interfaces/order';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { IReservation } from 'src/app/interfaces/reservation';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private menues : IMenuItem[] = [];
  private menuUpdated = new Subject<IMenuItem[]>()


  private orders: IOrder[] =[
    {OrderId: 1, Name: 'first food', Time: new Date()}
  ]

  constructor(private http: HttpClient) {
    this.menuUpdated.next([...this.menues])
   }

  getMenues():Observable<{message: string, menuItems:IMenuItem[]}>{
   return this.http.get<{message: string, menuItems: IMenuItem[]}>("http://localhost:3000/api/menuitems")
  }

  getMenuUpdateListener(){
    return this.menuUpdated.asObservable();
  }
  addMenue(menu: IMenuItem){
    this.menues.push(menu);
    this.menuUpdated.next([...this.menues])
  }

  addOrder(order: IOrder){
    this.orders.push(order);
  }

  addReservation(name: string, numberOfGuest: number): Observable<{message: string}>{
    const Reservation: IReservation = {id:null, Name: name, NumGuest: numberOfGuest}
    return this.http.post<({message: string})>("http://localhost:3000/api/reservation", Reservation)
  }
  getOrders(){
    return [...this.orders];
  }
}
