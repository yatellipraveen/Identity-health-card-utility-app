import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from "angularfire2/database";
import * as  firebase   from  'firebase';
import { async } from 'q';
import { ToastrService} from 'ngx-toastr';
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
  file:File;
  upload=false;
  
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    bgroup: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    eid: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
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
      private toastr : ToastrService

         ) { 
       }
    ngOnInit() {
    }
    onClick(){
      this.location.back();
    }
    async onSubmit(){
      this.submitted=true;
      if(this.form.invalid){
        return;
      } 
      const metaData= {'contentType': this.file.type};
      var string1 = '/photos/';
      var string2 = this.file.name;
      var path = string1 + string2;
        console.log("jdgkjjfkjfd",path);
      var storageRef :  firebase.storage.Reference=  firebase.storage().ref(path);
      await storageRef.put(this.file,metaData);
      await storageRef.getDownloadURL().then(downloadURL => {
         const imageUrl = downloadURL;
        console.log('URL:' + imageUrl); 
        this.form.patchValue({ 
          imagesrc: imageUrl
        });
      });
      let data =await this.form.value;
      console.log("Uploading file ......",this.file.name);
      this.firestore.collection('associate').doc(this.form.value.email).set(data);
      firebase.auth().createUserWithEmailAndPassword(this.form.value.email, '123456').then(function(firebaseUser) {
      });
      this.resetForm();
      this.submitted=false;
      this.flag=true;
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
       this.file =  event.target.files[0]; 
    }
}
