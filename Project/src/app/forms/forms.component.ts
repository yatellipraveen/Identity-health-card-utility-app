import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from "angularfire2/database";
import * as  firebase   from  'firebase';
import { async } from 'q';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  submitted=false;
  flag= false;
  image:File;
  
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    bgroup: new FormControl('', Validators.required),
    eid: new FormControl('', Validators.required),
    image: new FormControl(this.image,Validators.required),
    imagesrc:new FormControl('')
   });
   
   get f(){
     return this.form.controls;
   }
    constructor(private location: Location, 
      private firestore: AngularFirestore,
       private db: AngularFireDatabase ) { }
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
      this.firestore.collection('associate').add(data);
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
      /*var url = storageRef.getDownloadURL();
      console.log(url);
      this.form.patchValue({ 
        image: null
      });*/
      console.log("Uploading file ......",file.name);
    }
}
