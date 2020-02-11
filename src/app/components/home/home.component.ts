import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToMenu(){
    this.route.navigate(['/menu'])
  }

  goToReservation(){
    this.route.navigate(['/reservation'])
  }

  goToContactUs(){
    this.route.navigate(['/contactus'])
  }

}
