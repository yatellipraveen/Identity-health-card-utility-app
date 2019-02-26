import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

interface AssociateModel {
  firstName: string,
  lastName: string,
  cardno:string,
  dob:string,
  eno:string,
  gender:string,
  policyno:string,
  uhid:string,
  uid:string;
  validfrom:string,
  validupto:string
}

@Component({
  selector: 'app-showhc',
  templateUrl: './showhc.component.html',
  styleUrls: ['./showhc.component.css']
})
export class ShowhcComponent implements OnInit {
  user : Observable <firebase.User>;
  
  name:string;
  cardno:string;
  dob:string;
  eno:string;
  gender:string;
  age:string;
  policyno:string;
  uhid:string;
  uid:string;
  validfrom:string;
  validupto:string;



  constructor(private firestore: AngularFirestore, public af : AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) =>{
      if(auth!=null){
        this.user=this.af.authState;
        // this.user.subscribe(data => console.log(data))
        //console.log(this.user)
        var docRef = this.firestore.collection('employeehc', ref => ref.where('uid', '==', auth.uid))
        docRef.valueChanges().subscribe((data: AssociateModel[]) => {
          this.name = `${data[0].firstName} ${data[0].lastName}` ;
          this.cardno=data[0].cardno;
          this.dob=data[0].dob;
          this.eno=data[0].eno;
          this.gender=data[0].gender;
          this.policyno=data[0].policyno;
          this.uhid=data[0].uhid;
          this.uid=data[0].uid;
          this.validfrom=data[0].validfrom;
          this.validupto=data[0].validupto;
        })
        
      }
    }
  );
  }

   

  ngOnInit() {
  }

}
