import { Component, OnInit } from '@angular/core';
import { IReservation } from 'src/app/interfaces/reservation';
import { ReservationService } from 'src/app/services/reservationService/reservation.service';
import {map} from 'rxjs/operators';
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
    this._reservationService.getReservation()
    .pipe(map((reservationData) =>{
      return reservationData.reservation.map(reservation =>{
        return {
          Name: reservation.Name,
          NumGuest: reservation.NumGuest,
          id: reservation.id
        }
      })
    }))
    .subscribe(
      trsnsformedData =>{
        this.reservations = trsnsformedData;
        console.log(this.reservations);
      },
      error=>{
        console.log('error: ', error);
      },
      () =>console.log('everything went great')
    )
  }

}
