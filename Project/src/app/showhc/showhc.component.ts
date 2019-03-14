import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

export interface Data {
  firstName:string,
  lastName:string,
  dob:string,
  gender:string,
  policyno:string,
  uhid:string,
  validfrom:string,
  validupto:string;
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
  associateId;
  healthcardCollection: AngularFirestoreCollection<Data>;
  healthcard: Observable<Data[]>;
  
  constructor(private firestore: AngularFirestore, public fireauth : AngularFireAuth) {
  }
  
  ngOnInit() {
    this.authenticate();
  }
  authenticate(){
    this.fireauth.authState.subscribe(
      (auth) =>{
      if(auth!=null){
         this.associateId=auth.uid;
         this.healthcardCollection = this.firestore.collection<Data>('employeehc/' +auth.uid+ '/healthcards');
         this.healthcard = this.healthcardCollection.auditTrail().pipe(
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

}