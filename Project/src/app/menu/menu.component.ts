import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openMenu(){
    document.getElementById("myMenu").style.width = "100%";
  }
  closeMenu(){
    document.getElementById("myMenu").style.width="0%";
  }

}
