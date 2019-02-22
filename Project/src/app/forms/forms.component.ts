import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

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
   get f(){
     return this.form.controls;
   }
    constructor(private router: Router, private location: Location, private firestore: AngularFirestore) { }
  
   
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
  
      console.log(this.form.value)
      let data= this.form.value;
      this.firestore.collection('employeeid').add(data);
      
    }
      processFile( image: File ){
        //`console.log("image added");
      }
    

}
