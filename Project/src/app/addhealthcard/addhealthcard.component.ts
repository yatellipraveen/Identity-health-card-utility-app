import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-addhealthcard',
  templateUrl: './addhealthcard.component.html',
  styleUrls: ['./addhealthcard.component.css']
})
export class AddhealthcardComponent implements OnInit {
  submitted = false;
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    policyno :new FormControl ('', Validators.required),
    uhid: new FormControl ('', Validators.required),
    gender: new FormControl ('', Validators.required),
    eno: new FormControl ('', Validators.required),
    dob: new FormControl ('', Validators.required),
    cardno: new FormControl ('', Validators.required),
    validfrom: new FormControl ('', Validators.required),
    validupto: new FormControl ('', Validators.required),
   });
   get f(){
    return this.registerForm.controls;
  }
  constructor(private router: Router, private location: Location, private firestore: AngularFirestore) { }

  ngOnInit() {
      // this.registerForm = this.formBuilder.group({
      //     firstName: new FormControl ('', Validators.required),
      //     lastName: new FormControl ('', Validators.required),
      //     policyno : new FormControl ('', Validators.required),
      //     uhid:new FormControl ('', Validators.required),
      //     gender:new FormControl ('', Validators.required),
      //     eno: new FormControl ('', Validators.required),
      //     age:new FormControl ('', Validators.required),
      //     cardno: new FormControl ('', Validators.required),
      //     validfrom: ['',Validators.required],
      //     validupto: ['',Validators.required]
      // });
  }
  onClick(){
    this.location.back();
  }
  // convenience getter for easy access to form fields
  
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      console.log("sjfhjdgfkd");
      console.log(this.registerForm.value)
      let data= this.registerForm.value;
      this.firestore.collection('employeehc').add(data);
     //this.toastr.success('Successfully submitted', 'EMP REGISTER');
      //this.router.navigate(['welcome']);
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}
