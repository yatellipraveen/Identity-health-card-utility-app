import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";
import * as  firebase   from  'firebase';
import { async } from 'q';
import { ToastrService} from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient} from '@angular/common/http';


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
  url="https://us-central1-attendance-19db4.cloudfunctions.net/CreateEmpl";
  
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
      private toastr : ToastrService,
      private router: Router,
       private db: AngularFireDatabase,
       private http: HttpClient ) { 
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
      
  
    //   console.log(this.form.value)
    //   let data= this.form.value;
    //   this.firestore.collection('employeeid').add(data);
      
    //   //data = this.form.value;
    //  // this.firestore.collection('associate').add(data);
    //   this.resetForm();
    //   this.submitted=false;
    //   this.flag=true;

    //   let data = this.form.value;
    //   this.firestore.collection('associate').doc(this.form.value.email).set(data);

    //  // firebase.auth().createUserWithEmailAndPassword(this.form.value.email, '123456').then(function(firebaseUser) {
    //   firebase.auth().createUserWithEmailAndPassword(this.form.value.email, '123456').catch(function(error) {
         

    //   } 
      const metaData= {'contentType': this.file.type};
      var string1 = '/photos/';
      var string2 = this.file.name;
      var path = string1 + string2;
       // console.log("jdgkjjfkjfd",path);
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
      this.firestore.collection('associate').doc(this.form.value.eid).set(data);
      var obj={
        "uid":this.form.value.eid,
        "email": this.form.value.email
      }
      this.http.post(this.url,JSON.stringify(obj)).subscribe(res =>{
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
    processFile(event :any ){
       this.file =  event.target.files[0]; 
    }

}
