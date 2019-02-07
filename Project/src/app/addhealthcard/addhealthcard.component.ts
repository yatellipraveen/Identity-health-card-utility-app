import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addhealthcard',
  templateUrl: './addhealthcard.component.html',
  styleUrls: ['./addhealthcard.component.css']
})
export class AddhealthcardComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          policyno : ['', Validators.required],
          uhid:['', Validators.required],
          gender:['', Validators.required],
          eno: ['', Validators.required],
          age:['', Validators.required],
          cardno: ['', Validators.required],
          validfrom: ['',Validators.required],
          validupto: ['',Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      console.log(this.registerForm.value)
      //this.router.navigate(['welcome']);
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}
