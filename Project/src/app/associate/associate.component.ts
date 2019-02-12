import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {

  constructor(private location: Location) { }
  onClick(){
    this.location.back();
  }
  ngOnInit() {
  }

}
