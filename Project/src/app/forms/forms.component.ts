import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from "angularfire2/database";
import * as  firebase   from  'firebase';

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
    image: new FormControl(this.image,Validators.required)
   });
   
   get f(){
     return this.form.controls;
   }
    constructor(private location: Location, private firestore: AngularFirestore, private db: AngularFireDatabase) { }
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
      //this.resetForm();
      this.submitted=false;
      this.flag=true;
    }
    resetForm(){
      this.form.setValue({
        firstName: '',
        lastName:'',
        bgroup:'',
        eid:'',
        image:null
      });
    }
    processFile(event :any ){
      const file: File= event.target.files[0];
      const metaData= {'contentType': file.type};
      var string1 = '/photos/';
      var string2 = file.name;
      var path = string1 + string2;
      const storageRef : firebase.storage.Reference=firebase.storage().ref(path);
      storageRef.put(file,metaData);
      console.log("Uploading picture...",file.name);
    }
}
