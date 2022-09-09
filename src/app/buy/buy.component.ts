import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CashComponent } from '../cash/cash.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buttonColor = "black";
  buttonType="buy";
  isCustomSize = 250;
  buttonHeight = 70;
  isTop = window === window.top;
  constructor(private dialog:MatDialog, private route:Router) { }

  ngOnInit(): void {
  }
paymentRequest = {
  apiVersion:2,
  apiVersionMinor:0,
  allowedPaymentMethod:[
   { type:"CARD",parameters:{
    allowedPaymentMethods:["PAN_ONLY", "CRYPTOGRAM_3DS"],
    allowedCardNetworks:["AMEX", "VISA", "MASTERCARD"]
   },
   tokenizationSpecification:{
    type: "PAYMENT_GATEWAY",
    parameters:{
      gateway:"example",
      getwayMarchantId:"exampleGatewayMerchantId"
    }
   }
  }

  ],
  merchantInfo:{
    merchantId:"1234567890123456789",
    marchantName:"bbbbb"
  },
  transactionInfo:{
    totalPriceStatus:"FINAL",
    totalPriceLabek:"total",
    totalPrice:"1000.00",
    currencyCode:"INR",
    countryCode:"IND",
  }
};
onLoadPaymentData(event:any):void{
  console.log("load payment data by nikita", event.details)
}
onCash(){
this.dialog.open(CashComponent)
// this.route.navigateByUrl('/cash')
}
}
