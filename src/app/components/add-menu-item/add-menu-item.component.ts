import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css']
})
export class AddMenuItemComponent implements OnInit {
  newMenu = '';

  constructor() { }

  ngOnInit() {
    
  }

  onAddMenu(){
    this.newMenu = 'some value';
  }

}
