import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReservation } from 'src/app/interfaces/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getReservation():Observable<{message: string, reservation:IReservation[]}>{
    return this.http.get<{message: string, reservation:IReservation[]}>('http://localhost:3000/api/reservation');
  }
}
