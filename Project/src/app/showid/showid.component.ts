import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showid',
  templateUrl: './showid.component.html',
  styleUrls: ['./showid.component.css']
})
export class ShowidComponent implements OnInit {
  name="Seneca Global";
  id="02027";
  bldgrp="O+";


  constructor() { }

  ngOnInit() {
  }

}
