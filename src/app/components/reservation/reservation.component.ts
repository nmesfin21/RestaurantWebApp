import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderServiceService } from 'src/app/services/orderService/order-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private reservationService: OrderServiceService) { }

  ngOnInit() {
  }

  submitReservation(form: NgForm){
    this.reservationService.addReservation(form.value.guestName, form.value.numguest).subscribe(
      response =>{
        alert(response);
      }
    )
    
  }

}
