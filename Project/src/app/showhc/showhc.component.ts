import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

export interface Data {
  firstName: string,
  lastName: string,
  cardno:string,
  dob:string,
  eno:string,
  email:string,
  gender:string,
  policyno:string,
  uhid:string,
  uid:string;
  validfrom:string,
  validupto:string,
  //age:number
}

@Component({
  selector: 'app-showhc',
  templateUrl: './showhc.component.html',
  styleUrls: ['./showhc.component.css']
})
export class ShowhcComponent implements OnInit {
  user : Observable <firebase.User>;

  
  
  name:string="seneca global";
  cardno:string;
  dob:string;
  eno:string;
  gender:string;
  policyno:string;
  uhid:string;
  uid:string;
  validfrom:string;
  validupto:string;
  age:number;

  articlesCollection: AngularFirestoreCollection<Data>;
  articles: Observable<Data[]>;
  article: any;

  constructor(private firestore: AngularFirestore, public af : AngularFireAuth) {
          //var dob = '19800810';
          // var fields=this.dob.split('/');
          // var year = Number(fields[2]);
          // var month = Number(fields[1]);
          // var day = Number(fields[0]);
          // var today = new Date();
          // var age = today.getFullYear() - year;
          // if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
          // age--;
          //  }
        //})
        
        // var docRef = this.firestore.collection('employeehc', ref => ref.where('uid', '==', auth.uid))
        // docRef.valueChanges().subscribe((data: AssociateModel[]) => {
        //   this.name = `${data[0].firstName} ${data[0].lastName}` ;
        //   this.cardno=data[0].cardno;
        //   this.dob=data[0].dob;
        //   this.eno=data[0].eno;
        //   this.gender=data[0].gender;
        //   this.policyno=data[0].policyno;
        //   this.uhid=data[0].uhid;
        //   this.uid=data[0].uid;
        //   this.validfrom=data[0].validfrom;
        //   this.validupto=data[0].validupto;
        //})
       
       

     
  }

   

  ngOnInit() {
    this.af.authState.subscribe(
      (auth) =>{
      if(auth!=null){
        this.user=this.af.authState;
    this.articlesCollection = this.firestore.collection('employeehc');
    this.articles = this.articlesCollection.valueChanges();
    this.articlesCollection.doc(auth.email).ref.get().then((doc) => {
    this.article = doc.data();  
    //var dob = '1980/08/10';
    var fields= this.article.dob.split('/');
      var year = Number(fields[2]);
      var month = Number(fields[1]);
      var day = Number(fields[0]);
      var today = new Date();
      this.age = today.getFullYear() - year;
      if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      this.age--;
       }
      });
    }
  });

  }

}
