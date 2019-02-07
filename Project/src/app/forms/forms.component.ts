import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  submitted=false;
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    eid: new FormControl('', Validators.required)
   });
   get f(){
     return this.form.controls;
   }
    constructor() { }
  
   
    ngOnInit() {
    }
  
    onSubmit(){
      this.submitted=true;
      if(this.form.invalid){
        return;
      }
      alert(JSON.stringify(this.form.value));
    }

}
