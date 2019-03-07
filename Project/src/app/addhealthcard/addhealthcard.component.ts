import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { pipeFromArray } from 'rxjs/internal/util/pipe';
import { AngularFireAuth } from '@angular/fire/auth';
import { GetIdService } from '../services/get-id.service';


@Component({
  selector: 'app-addhealthcard',
  templateUrl: './addhealthcard.component.html',
  styleUrls: ['./addhealthcard.component.css']
})
export class AddhealthcardComponent implements OnInit {

  AssociateId;
  submitted = false;
  flag= false;
  success=false;
  registerForm = new FormGroup({
    policyno :new FormControl ('', Validators.required),
    uhid: new FormControl ('', Validators.required),
    gender: new FormControl ('', Validators.required),
    dob: new FormControl ('', Validators.required),
    validfrom: new FormControl ('', Validators.required),
    validupto: new FormControl ('', Validators.required)
   });
   get f(){
    return this.registerForm.controls;
  }
  constructor(private router: Router, private location: Location, private firestore: AngularFirestore, public af : AngularFireAuth, private service: GetIdService) { 
    this.af.authState.subscribe(
      (auth) =>{
        if(auth!=null){
          this.flag=false;
          var dbRef = firestore.collection('associate').doc(auth.uid);
          dbRef.ref.get()
            .then(doc => {
              if (!doc.exists) {
                console.log('No such document!');
              } else {
                 if(doc.data().role=='Associate') this.AssociateId=auth.uid;
                 else  this.AssociateId=service.getId();
              }
            })
            .catch(err => {
              console.log('Error getting document', err);
            });
        }
      }
    );
  }

  ngOnInit() {

  }
  onClick(){
    this.location.back();
  }
  
  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }  
    else{    
      this.flag=true;
      let data= this.registerForm.value;
      this.firestore.collection('employeehc').doc(this.AssociateId).set(data);
      this.resetForm();
      this.submitted=false;
      this.flag=false;
      this.success=true;
    }    
  }
    resetForm(){
      this.registerForm.setValue({
    policyno : '',
    uhid: '',
    gender: '',
    eno: '',
    dob: '',
    validfrom:'',
    validupto:''
    });
  }
}
