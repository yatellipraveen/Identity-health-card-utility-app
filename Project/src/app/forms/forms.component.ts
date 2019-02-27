import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";
import * as  firebase   from  'firebase';
import { async } from 'q';
import { AngularFireAuth } from '@angular/fire/auth';
import { Tree } from '@angular/router/src/utils/tree';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  submitted=false;
  flag= false;
  image:File;
  upload=false;
  
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    bgroup: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    eid: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required),
    image: new FormControl(this.image,Validators.required),
    imagesrc:new FormControl('')
   });
   
   get f(){
     return this.form.controls;
   }   

    constructor(private location: Location, 
      private firestore: AngularFirestore,
      public af : AngularFireAuth,
      public af1 :AngularFireAuth,
      private router: Router,
       private db: AngularFireDatabase ) { 

       }
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
      else
        this.router.navigate(['admin']);
  
    //   console.log(this.form.value)
    //   let data= this.form.value;
    //   this.firestore.collection('employeeid').add(data);
      
    //   //data = this.form.value;
    //  // this.firestore.collection('associate').add(data);
    //   this.resetForm();
    //   this.submitted=false;
    //   this.flag=true;

      let data = this.form.value;
      this.firestore.collection('associate').doc(this.form.value.email).set(data);

      firebase.auth().createUserWithEmailAndPassword(this.form.value.email, '123456').then(function(firebaseUser) {
     // firebase.auth().createUserWithEmailAndPassword(this.form.value.email, '123456').catch(function(error) {
         
      });
     
      if(this.upload){
        this.resetForm();
        this.submitted=false;
        this.flag=true;
        this.upload=false;
        
      }
    }
    resetForm(){
      this.form.setValue({
        firstName: '',
        lastName:'',
        bgroup:'',
        eid:'',
        email:'',
        role:'',
        image:null,
        imagesrc:''
      });
    }
    async processFile(event :any ){
      const file: File= event.target.files[0];
      const metaData= {'contentType': file.type};
      var string1 = '/photos/';
      var string2 = file.name;
      var path = string1 + string2;
      var storageRef :  firebase.storage.Reference=  firebase.storage().ref(path);
      await storageRef.put(file,metaData);
      storageRef.getDownloadURL().then(downloadURL => {
         const imageUrl = downloadURL;
        console.log('URL:' + imageUrl);
        this.form.patchValue({ 
          imagesrc: imageUrl
        });
      });
      this.upload=true;
      console.log("Uploading file ......",file.name);
    }
}
