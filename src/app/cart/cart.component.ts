import { Component, Input, OnInit } from '@angular/core';
import { SenderService } from 'src/app/service/sender.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.send.getItems();
  
  public grandTotal : number =0;
  
  
  // addProductToCart(product: Product) {
    // this.cartItems.push({
    //   id:number,
    //   productId: product.id,
    //   productName: product.name,
    //   qty: 1,
    //   price:product.price,
 

  
  
  // this.cartTotal = 0
  // this.items.forEach((item:any) =>{
  //   this.cartTotal += (item.qty * item.price)
  // })

  
  //  console.log(this.addProductToCart(product));
// } 
  cartItems:any = [
    // {id:1, productId:1, imageUrl:'assets/images/sofa.jpg', productName:'Sofa Cum bed', qty:4 , price:100},
    // {id:2, productId:1,  imageUrl:'assets/images/sofa1.jpg', productName:'Sofa', qty:5 , price:100},
    // {id:3, productId:1,  imageUrl:'assets/images/bed.jpg', productName:'Bed', qty:6 , price:100},
    // {id:4, productId:1,  imageUrl:'assets/images/dinning.jpg', productName:'Dinning', qty:7 , price:100},
  ];
  cartTotal = 0
  constructor(private send : SenderService,private route:Router) { }
  ngOnInit ()
    {
      // this.send.getMsg().subscribe((product: any)=> {
      //   console.log(product);
        // this.addProductToCart(product);
        // console.log(this.addProductToCart(product));
      //   this.cartTotal = 0
      //   this.items.forEach((item:any) =>{
      //     this.cartTotal += (item.qty * item.price)
      //   })
      // })
  }
   
  //  addProductToCart(product: Product){
  
    // console.log(this.cartItems);
  

//  console.log(this.addProductToCart);

mainpage(){
  this.route.navigateByUrl('/main1');
}
itemCount(){
  return this.send.itemsCount
}
}


