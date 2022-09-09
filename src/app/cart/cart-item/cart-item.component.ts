import { Component, Input, OnInit } from '@angular/core';
import { SenderService } from 'src/app/service/sender.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:any;
  constructor(private send: SenderService) { }

  ngOnInit(): void {
  }
  itemCount(){
    return this.send.itemsCount()
  }
  clrCart(){
          
      this.cartItem.splice();
                 // rerender your array
          
  }

}
