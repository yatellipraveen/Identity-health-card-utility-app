import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from "angularfire2/database";
import * as  firebase   from  'firebase';
import * as firebase1 from 'firebase';
import { async } from 'q';
import { AngularFireAuth } from '@angular/fire/auth';

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

  config = {
    apiKey: "AIzaSyATvwgaT6jgpJ-hqi_Ex1wLSg2uvC8NSXw",
    authDomain: "firestorecrud-21741.firebaseapp.com",
    databaseURL: "https://firestorecrud-21741.firebaseio.com",
    projectId: "firestorecrud-21741",
    storageBucket: "firestorecrud-21741.appspot.com",
    messagingSenderId: "185568206116"
  }
  secondaryApp = firebase.initializeApp(this.config, "Secondary");
  
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
      public af1 :AngularFireAuth

         ) { 
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
      
      let data = this.form.value;
      this.firestore.collection('associate').doc(this.form.value.email).set(data);
    this.secondaryApp.auth().createUserWithEmailAndPassword(this.form.value.email, '123456').then(function(firebaseUser) {
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
