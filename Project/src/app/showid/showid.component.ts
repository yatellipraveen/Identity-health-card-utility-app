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
  articlesCollection: AngularFirestoreCollection<Data>;
  articles: Observable<Data[]>;
  article: any; 


  constructor(private firestore: AngularFirestore, public af : AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) =>{
      if(auth!=null){
        this.user=this.af.authState;
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
