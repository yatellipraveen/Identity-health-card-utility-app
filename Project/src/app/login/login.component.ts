import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'firebase';
import * as firebase from 'firebase';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : Observable <firebase.User>;
  loginForm: FormGroup;
  submitted=false;
  // abcd: firebase.firestore.DocumentData = documentSnapshot.data();

  constructor(private formBuilder: FormBuilder, private firestore : AngularFirestore, public af: AngularFireAuth,private router: Router) {
      this.af.authState.subscribe(
        (auth) =>{
          if(auth!=null){
            this.user=af.authState;
            // var collectionReference = this.firestore.collection('associate');
            // var query = collectionReference.ref.where('uid', '==', auth.uid);
            // query.get().then(function(querySnapshot) {
            //   querySnapshot.forEach(function (documentSnapshot) {
            //       var data = documentSnapshot.data();
            //       // this.abcd = data;
            //       // console.log(this.abcd.role);
            //       if(data.role=='associate') router.navigate(['associate']);
            //       else if(data.role=='admin') router.navigate(['admin']);
            //       else if(data.role=='security') router.navigate(['security']);
            //     });
            //   });
            var cityRef = firestore.collection('associate').doc(auth.email);
            var getDoc = cityRef.ref.get()
              .then(doc => {
                if (!doc.exists) {
                  console.log('No such document!');
                } else {
                   if(doc.data().role=='Associate') router.navigate(['associate']);
                   else if(doc.data().role=='Admin') router.navigate(['admin']);
                   else if(doc.data().role=='Security') router.navigate(['security']);
                  //console.log(doc.data().role);
                }
              })
              .catch(err => {
                console.log('Error getting document', err);
              });
          }
        }
      );
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.af.auth.signInWithEmailAndPassword(this.loginForm.value.username,this.loginForm.value.password);
  }

  
}
