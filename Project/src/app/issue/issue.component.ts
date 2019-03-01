import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  submitted=false;
  form = new FormGroup({
    eno: new FormControl('', Validators.required),
    tno: new FormControl('', Validators.required)
  });
  get f(){
    return this.form.controls;
  }   

  constructor(private firestore: AngularFirestore,
    private router: Router,
       private db: AngularFireDatabase) { }

  ngOnInit() {
  }
  onSubmit(){
    this.submitted=true;
    if(this.form.invalid){
      return;

    }

}
}
