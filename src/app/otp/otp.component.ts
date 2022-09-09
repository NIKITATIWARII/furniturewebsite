import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import firebase from 'firebase/compat/app';
import "firebase/auth";
import "firebase/firestore"
import { Route, Router } from '@angular/router';
import { OrderPlacedComponent } from '../order-placed/order-placed.component';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
otp: string = ''
verify:any;
  constructor(private route:Router, private dialoge:MatDialog) { }
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder:'',
    inputStyles:{
      width:'50px',
      height:'50px'
    },
  }

  ngOnInit(){
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}')
  }
onOtpChange(otpCode:any){
this.otp = otpCode
console.log(this.otp)
}
handleClick(){
  var credentials = firebase.auth.PhoneAuthProvider.credential(this.verify, this.otp);
  firebase.auth().signInWithCredential(credentials).then((response)=>{
    console.log(response);
    localStorage.setItem('user mobile' , JSON.stringify(response));
    this.dialoge.open(OrderPlacedComponent)
    
  })
  .catch((error) =>{
    alert(error.message);
  }
  )
}
}
