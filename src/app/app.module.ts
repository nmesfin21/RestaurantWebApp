import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatFormFieldModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMenuItemComponent } from './components/add-menu-item/add-menu-item.component';
import { SeeMenuItemComponent } from './components/see-menu-item/see-menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { HomeComponent } from './components/home/home.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddMenuItemComponent,
    SeeMenuItemComponent,
    HeaderComponent,
    ViewOrdersComponent,
    HomeComponent,
    ReservationComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
