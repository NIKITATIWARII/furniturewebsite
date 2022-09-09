import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MatDialog } from '@angular/material/dialog';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import firebase from 'firebase/compat/app';
import "firebase/auth";
import "firebase/firestore"
import { Router } from '@angular/router';
import { OtpComponent } from '../otp/otp.component';
import { AddComponent } from '../add/add.component';

var config = {
  apiKey: "AIzaSyDbQkfMToFcAvcHV8tzhrgP5hyuPxSmvJw",
  authDomain: "phone-auth-2110a.firebaseapp.com",
  projectId: "phone-auth-2110a",
  storageBucket: "phone-auth-2110a.appspot.com",
  messagingSenderId: "852880748655",
  appId: "1:852880748655:web:b94bc8a115588ec9089d9a"
}
@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
   phnnumber:any;
   reCaptchaVarifier : any;
  constructor(private dialogRef: MatDialogRef<CashComponent> , private route:Router) { }
   form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName:new FormControl('',Validators.required),
    phnnumber:new FormControl('' , Validators.required),
    pincode:new FormControl('', Validators.required),
    city:new FormControl('', Validators.required),
    state:new FormControl('', Validators.required),
    isready: new FormControl(false)
   })
  ngOnInit() {
    firebase.initializeApp(config);
  }
orderPlaced(){
  // window.alert('Your Product Oerdered Successfully')
 
  this.reCaptchaVarifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {size:'invisible'})

  firebase.auth().signInWithPhoneNumber(this.phnnumber, this.reCaptchaVarifier).then((confirmationResult)=>{
    localStorage.setItem('verificationId', JSON.stringify(confirmationResult.verificationId))
    this.route.navigateByUrl('otp')
    console.log(confirmationResult);
  }).catch((error)=>{
    alert(error.message)
    setTimeout(()=>{
      window.location.reload();
    },5000)
  })
 
  
}
move(){
  this.dialogRef.close();
}

}
