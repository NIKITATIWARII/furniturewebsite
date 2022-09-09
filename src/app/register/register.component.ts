import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mytask:any='';

  constructor() { }
  signupForm:any;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "name": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "age": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "city": new FormControl(null,[Validators.required]),
      "gender": new FormControl(null,[Validators.required]),
      "terms": new FormControl('false',[Validators.required]),
    })
  }
  submitData(){
    console.log(this.signupForm.value);
 window.alert('Thank you for register')
 
 
//  if(this.signupForm.valid){
//   window.alert(`Thank you ${this.signupForm.value.name}`);
//    console.log(this.signupForm.value.name)
//  }
}
 

sign(){
  
}
}
