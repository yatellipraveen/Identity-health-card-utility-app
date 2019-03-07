import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { __values } from 'tslib';

export interface Data{
  eno:string;
  policyno:string;
  uhid:string;
  gender:string;
  dob:string;
  validfrom:string;
  validupto:string;
}
@Component({
  selector: 'app-addhealthcard',
  templateUrl: './addhealthcard.component.html',
  styleUrls: ['./addhealthcard.component.css']
})

export class AddhealthcardComponent implements OnInit {
  submitted = false;
  flag= false;
  success=false;
  
  registerForm = new FormGroup({

    policyno :new FormControl ('', Validators.required),
    uhid: new FormControl ('', Validators.required),
    gender: new FormControl ('', Validators.required),
    eno: new FormControl ('', Validators.required),
    dob: new FormControl ('', Validators.required),

    //cardno: new FormControl ('', Validators.required),
    validfrom: new FormControl ('', Validators.required),
    validupto: new FormControl ('', Validators.required)
   });
  productCollection: AngularFirestoreCollection;
   get f(){
    return this.registerForm.controls;
  }
  constructor(private router: Router, private location: Location, private firestore: AngularFirestore) { }

  ngOnInit() {

  }
  onClick(){
    this.location.back();
  }
  
  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("asdhfs");
        return;
    }  
    else{    
      this.flag=true;
      let data= this.registerForm.value;
      this.firestore.collection('employeehc').doc(this.registerForm.value.eno)
      .collection('healthcards')
      .add(data);
      //this.firestore.collection('employeehc').doc(this.registerForm.value.eno).set(data);
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
    //email:'',
    eno: '',
    dob: '',
    //cardno: '',
    validfrom:'',
    validupto:''

    });
  }
}
