import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

export interface Data {
  firstName: string,
  lastName: string,
  bgroup: string
  eid:string;
  imagesrc:string;
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
  articlesCollection: AngularFirestoreCollection<Data>;
  articles: Observable<Data[]>;
  article: any; 


  constructor(private firestore: AngularFirestore, public af : AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) =>{
      if(auth!=null){
        this.user=this.af.authState;
        // this.user.subscribe(data => console.log(data))
        //console.log(this.user)
      //   var docRef = this.firestore.collection('associate', ref => ref.where('uid', '==', auth.uid))
      //   docRef.valueChanges().subscribe((data: AssociateModel[]) => {
      //     this.bgroup = data[0].bgroup;
      //     this.name = `${data[0].firstName} ${data[0].lastName}` ;
      //     this.id=data[0].eid;
      //   })
      // }
        // var docRef = this.firestore.collection('associate', ref => ref.where('uid', '==', auth.uid))
        //   docRef.valueChanges().subscribe((data: AssociateModel[]) => {
        //   this.bgroup = data[0].bgroup;
        //   this.name = `${data[0].firstName} ${data[0].lastName}` ;
        //   this.id=data[0].eid;
        // })
        this.articlesCollection = this.firestore.collection('associate');
        this.articles = this.articlesCollection.valueChanges();
        this.articlesCollection.doc(auth.email).ref.get().then((doc) => {
        this.article = doc.data();
      });
    }
  });
}

  ngOnInit() {
  }


       

}
