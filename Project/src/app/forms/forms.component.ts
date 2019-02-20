import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import {NgForm} from '@angular/forms';
import { database } from 'firebase';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  submitted=false;
  image:File;
  
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    bgroup: new FormControl('', Validators.required),
    eid: new FormControl('', Validators.required),
    image: new FormControl('',Validators.required)
   });
   data = this.form.value;
   get f(){
     return this.form.controls;
   }
    constructor(private location: Location, private firestore: AngularFirestore) { }
    ngOnInit() {
    }
    onClick(){
      this.location.back();
    }
    onSubmit(){
      this.submitted=true;
      if(this.form.invalid){
        return;
      }
      console.log("dhgfuydgudsg");
      this.firestore.collection('associateDetails').add(this.data);
      this.resetForm();
      this.submitted=false;
    }
    resetForm(){
      this.form.setValue({
        firstName: '',
        lastName:'',
        bgroup:'',
        eid:'',
        image:''
      });
    }
    processFile( image: File ){
      //this.data.image = image;
    }
   
}
