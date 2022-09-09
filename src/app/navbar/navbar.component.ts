import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { SenderService } from '../service/sender.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  // collapsed = true;
  public searchTerm : string ='';
  constructor(private route:Router , private api : ApiService, private send :SenderService) { }

  ngOnInit(): void {
  this.cartItemFunc();
    
    
  }
  itemCart :number =0;
  cartItemFunc(){
  if(localStorage.getItem('this.items') != null){
  var cartCount = JSON.parse(localStorage.getItem('this.items') || '[]') ;
    this.itemCart = cartCount.length;
    // console.warn(cartCount);
  }
  }
 home(){

  this.route.navigateByUrl('/home')
  
 }
 search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.api.search.next(this.searchTerm);
 }
 srch(){
  this.route.navigateByUrl('/main1');
}
}
