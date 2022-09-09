import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
  items: any[] = [];
  subject = new Subject()
  numOfItems:any = new BehaviorSubject([]);
  constructor() { 
    this.items= JSON.parse(localStorage.getItem("this.items") || '[]');
  
  }
  ngOnInit():void{
    
    console.log(this.items)
  }
  sendMsg(product:any){
    // console.log(product)
  this.subject.next(product)
  }
  getMsg(){
   return this.subject.asObservable()
  
  }
 
  addToCart(product: Product) {
    this.items.push(product);
    this.getTotalPrice();
    localStorage.setItem("this.items", JSON.stringify(this.items));
  }
  getTotalPrice(){
    let grandTotal = 0;
    this.items.map((a:any)=>{
      grandTotal += a.total;
    })
  }
  removeCartItem(product: any){
    this.items.map((a:any, index:any)=>{
      if (product.id===a.id){
        this.items.splice(index, 1);
      }
    })
  }
  getItems(){
    return this.items;
    
  }
  itemsCount(){
    return this.items.length;
  }
  clearCart(){
  //  localStorage.removeItem('this.items');
    // this.items=this.items.splice(this.items.indexOf(this.items), 1);
    // return this.items;
    
  }
  

}
