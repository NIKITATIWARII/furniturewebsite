import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder,private route:Router) { }
  signupForm:any;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    })
  }
  submitData(){
    console.log(this.signupForm.value);
 
 if(this.signupForm.valid){
   alert(`Thank you ${this.signupForm.value.name}`);
   console.log(this.signupForm.value.name)
 }
}
 
register(){
  this.route.navigateByUrl('/register')
}
sign(){
  this.route.navigateByUrl('/main1');
}
 }
 

