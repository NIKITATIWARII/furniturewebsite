import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SenderService } from 'src/app/service/sender.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product;
  constructor(private send:SenderService) { }

  ngOnInit(): void {
  }
  addToCart(productItem:Product){
    this.send.addToCart(productItem);
    window.alert('Your Product has been added thr Cart')
  }
  increment(productItem:Product){
    if(productItem.qty != 5){
      productItem.qty += 1;
    }
  
  }
  decrement(productItem:Product){
    if(productItem.qty != 1){
      productItem.qty -= 1;
    }
  }
}
