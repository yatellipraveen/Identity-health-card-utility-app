import { Component, OnInit } from '@angular/core';
import  { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private location: Location) { }
  onClick(){
    this.location.back();
  }
  ngOnInit() {
  }
}
