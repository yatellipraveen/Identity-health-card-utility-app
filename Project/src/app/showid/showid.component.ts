import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

interface AssociateModel {
  firstName: string,
  lastName: string,
  bgroup: string
  eid:string;
}
@Component({
  selector: 'app-showid',
  templateUrl: './showid.component.html',
  styleUrls: ['./showid.component.css']
})
export class ShowidComponent implements OnInit {

  user : Observable <firebase.User>;
  
  name:string;
  bgroup:string;
  id:string;
 

  
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


  constructor(private firestore: AngularFirestore, public af : AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) =>{
      if(auth!=null){
        this.user=this.af.authState;
        // this.user.subscribe(data => console.log(data))
        //console.log(this.user)
        var docRef = this.firestore.collection('associate', ref => ref.where('uid', '==', auth.uid))
        docRef.valueChanges().subscribe((data: AssociateModel[]) => {
          this.bgroup = data[0].bgroup;
          this.name = `${data[0].firstName} ${data[0].lastName}` ;
          this.id=data[0].eid;
        })
      }
    }
  );
  }

  ngOnInit() {
  }


       

}
