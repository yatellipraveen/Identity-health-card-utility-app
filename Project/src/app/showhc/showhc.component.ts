import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

export interface Data {

  firstName:string,
  lastName:string,
  cardno:string,
  dob:string,
  eno:string,
  email:string,
  gender:string,
  policyno:string,
  uhid:string,
  //age:number
}
export interface Data1{
  firstName:string;
  lastName:string;
  eid:string;
}

@Component({
  selector: 'app-showhc',
  templateUrl: './showhc.component.html',
  styleUrls: ['./showhc.component.css']
})
export class ShowhcComponent implements OnInit {
  user : Observable <firebase.User>;
  
  
  age:number;
  ageList=[];
  AssociateId;
  articlesCollection: AngularFirestoreCollection<Data>;
  articlesCollection1:AngularFirestoreCollection<Data1>;
  articles: Observable<Data[]>;
  articles1: Observable<Data1[]>;
  article: any;
  article1: any;

  constructor(private firestore: AngularFirestore, public af : AngularFireAuth) {

    this.af.authState.subscribe(
      (auth) =>{
      if(auth!=null){
         this.AssociateId=auth.uid;
         this.articlesCollection = firestore.collection<Data>('employeehc/' +auth.uid+ '/healthcards');
         this.articles = this.articlesCollection.auditTrail().pipe(
         map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Data;
          var fields=data.dob.split('/');
          var year = Number(fields[2]);
          var month = Number(fields[1]);
          var day = Number(fields[0]);
          var today = new Date();
          this.age = today.getFullYear() - year;
          if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
          this.age--;
          }
          this.ageList.push(this.age);
        return data ;
      }))
    );
  }
  });

  }
  
  ngOnInit() {
  }

}