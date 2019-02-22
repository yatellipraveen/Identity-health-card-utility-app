import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public af: AngularFireAuth) { }

  ngOnInit() {
  }
  openMenu(){
    document.getElementById("myMenu").style.width = "100%";
  }
  closeMenu(){
    document.getElementById("myMenu").style.width="0%";
  }
  logout(){
    this.af.auth.signOut();
    
  }
}
