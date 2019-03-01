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
  
  submitted = false;
  //flag= false;
  constructor(private router: Router) {}
  ngOnInit() {
  }
   
   onSubmit=function() {
     //this.submitted = true;
     this.router.navigate(['security/issue']);
   };
       
  }
 

