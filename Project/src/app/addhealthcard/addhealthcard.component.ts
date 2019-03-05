import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-addhealthcard',
  templateUrl: './addhealthcard.component.html',
  styleUrls: ['./addhealthcard.component.css']
})
export class AddhealthcardComponent implements OnInit {
  submitted = false;
  flag= false;
  registerForm = new FormGroup({
    policyno :new FormControl ('', Validators.required),
    uhid: new FormControl ('', Validators.required),
    gender: new FormControl ('', Validators.required),
    //email: new FormControl('',Validators.required),
    eno: new FormControl ('', Validators.required),
    dob: new FormControl ('', Validators.required),
    //cardno: new FormControl ('', Validators.required),

   });
   get f(){
    return this.registerForm.controls;
  }
  constructor(private router: Router, private location: Location, private firestore: AngularFirestore) { }

  ngOnInit() {

  }
  onClick(){
    this.location.back();
  }
  // convenience getter for easy access to form fields
  
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }      

      let data= this.registerForm.value;
      this.firestore.collection('employeehc').doc(this.registerForm.value.eno).set(data);
        this.resetForm();
        this.submitted=false;
        this.flag=true;
  }
    resetForm(){
      this.registerForm.setValue({
      //firstName: '',
      //lastName:'',
    policyno : '',
    uhid: '',
    //gender: '',
    email:'',
    //eno: '',
    dob: '',
    //cardno: '',
    //validfrom:'',
    //validupto:''
    });
  }
}
