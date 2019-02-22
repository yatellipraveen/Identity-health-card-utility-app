import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    submitted = false;
    registerForm = new FormGroup({
      eid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
     role :new FormControl ('', Validators.required),
     });
     get f(){
      return this.registerForm.controls;
    }
    constructor(private router: Router, private firestore: AngularFirestore) { }
  
    ngOnInit() {
       
    }
    
    
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        //else
        //this.router.navigate(['home']);
        console.log(this.registerForm.value)
        let data= this.registerForm.value;
        this.firestore.collection('register').add(data);
        if(data.role=='admin')
        this.router.navigate(['home/admin']);
        else if(data.role=='associate')
        this.router.navigate(['home/associate']);
        else
        this.router.navigate(['home/security']);
       //this.toastr.success('Successfully submitted', 'EMP REGISTER');
        //this.router.navigate(['welcome']);
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
  }
