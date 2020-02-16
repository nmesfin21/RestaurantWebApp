import { Component, OnInit } from '@angular/core';
import { IReservation } from 'src/app/interfaces/reservation';
import { ReservationService } from 'src/app/services/reservationService/reservation.service';

@Component({
  selector: 'app-view-reservation',
  templateUrl: './view-reservation.component.html',
  styleUrls: ['./view-reservation.component.css']
})
export class ViewReservationComponent implements OnInit {

  reservations: IReservation[];
  constructor(private _reservationService: ReservationService) { }

  ngOnInit() {
    this.getReservationFromService();
  }

  getReservationFromService(){
    this._reservationService.getReservation().subscribe(
      data =>{
        this.reservations = data.reservation;
        console.log(this.reservations);
      },
      error=>{
        console.log('error: ', error);
      },
      () =>console.log('everything went great')
    )
  }

}
