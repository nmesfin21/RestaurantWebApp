import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { SeeMenuItemComponent } from './components/see-menu-item/see-menu-item.component';
import { HomeComponent } from './components/home/home.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ViewReservationComponent } from './components/view-reservation/view-reservation.component';


const routes: Routes = [
  {path: 'vieworders', component:ViewOrdersComponent},
  {path: 'menu', component:SeeMenuItemComponent},
  {path: 'home', component:HomeComponent},
  {path: 'reservation', component:ReservationComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'viewreservation', component:ViewReservationComponent},
  {path: '', component: SeeMenuItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
