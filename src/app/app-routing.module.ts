import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { BuyComponent } from './buy/buy.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { CashComponent } from './cash/cash.component';
import { City1Component } from './city1/city1.component';


import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Main1ItemComponent } from './main1/main1-item/main1-item.component';
import { Main1Component } from './main1/main1.component';
import { Main2Component } from './main2/main2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';
import { SliderComponent } from './slider/slider.component';

import { StoreComponent } from './store/store.component';

import { StoreItemsComponent } from './store/store-items/store-items.component';
import { AddComponent } from './add/add.component';
import { Main2ItemComponent } from './main2/main2-item/main2-item.component';
import { ReviewItemComponent } from './review/review-item/review-item.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { OtpComponent } from './otp/otp.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';


const routes: Routes = [
   
  {path:'store-items', component:StoreItemsComponent},
  {path:'add', component:AddComponent},
  {path:'main2-item', component:Main2ItemComponent},
  {path:'review-item', component:ReviewItemComponent},
  {path:'user', component:UserComponent},
  {path:'otp', component:OtpComponent},
  {path:'order-placed', component:OrderPlacedComponent},
  
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'cash',
    component:CashComponent
  },
  {
    path: 'slider',
    component:SliderComponent

  },
  {
    path:'main1',
    component:Main1Component
  },
  {
    path: 'main2',
    component:Main2Component
  },
  {
    path:'buy',
    component:BuyComponent
  },
  {
    path: 'footer',
    component:FooterComponent
  },
  {
    path: 'review',
    component:ReviewComponent
  },
  {
    path: 'store' ,
    component:StoreComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'register',
    component:RegisterComponent
    },
   {
    path: 'home',
    component:HomeComponent
   },
  
   {
    path: 'cart-item',
    component: CartItemComponent
   },
   {
    path: 'cart',
    component: CartComponent
   },
   {
   path:'products/:id/:name', component:ProductsComponent
   },
   {
   path:'product-item', component:ProductItemComponent
   },
   {
    path: 'city1/:id/:name',
    component: City1Component
   },
  
   {
    path: 'main1-item',
    component:Main1ItemComponent
   },
  
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
