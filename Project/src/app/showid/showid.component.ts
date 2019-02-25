import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-showid',
  templateUrl: './showid.component.html',
  styleUrls: ['./showid.component.css']
})
export class ShowidComponent implements OnInit {

name;
id;
bldgrp;
  constructor(private router: Router, private afs: AngularFirestore) {
    //var ref=afs.collection('employeeid');
    //let userRef = this.afs.collection('register').ref.where('eid','==',ref.doc);
    //userRef.get().then((result) => {
    //result.forEach(doc => {
    //console.log(doc.data());
    //added benefit of getting the document id / key
    //console.log(doc.id);
    //})
    //})

 // var empid=afs.collection("register").doc('eid');
 // this.firestore.collection("employeeid").ref.where('eid',"==",'eid').get();
  //.then(function() {
    //var name= 
  //})
   }

  ngOnInit() {
  }

}
