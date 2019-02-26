import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : Observable <firebase.User>;
  loginForm: FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder, private firestore : AngularFirestore, public af: AngularFireAuth,private router: Router) {
      this.af.authState.subscribe(
        (auth) =>{
          if(auth!=null){
            this.user=af.authState;
            console.log("succesfull Login");
            this.router.navigate(['admin']);
          }
        }
      )
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
