import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';



@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  
  // submitted = false;
  // flag= false;
  // registerForm = new FormGroup({
  //   email :new FormControl ('', Validators.required),
  // });
  // get f(){
  //   return this.registerForm.controls;
  // } 
  constructor(private router: Router, private location: Location ) {}
  ngOnInit() {
  }
  // onClick(){
  //   this.location.back();
  // }
  // // convenience getter for easy access to form fields
  
  // onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.registerForm.invalid) {
  //         return;
  //     }

  
        // this.resetForm();
        // this.submitted=false;
        // this.flag=true;
     //this.toastr.success('Successfully submitted', 'EMP REGISTER');
      //this.router.navigate(['welcome']);
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  //   resetForm(){
  //     this.registerForm.setValue({
  //   email:'',
  //   });
  // }


