import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSliderModule} from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Main1Component } from './main1/main1.component';
import { Main2Component } from './main2/main2.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';
import { StoreComponent } from './store/store.component';
import { SliderComponent } from './slider/slider.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { City1Component } from './city1/city1.component';
import { PlacesComponent } from './city1/places/places.component';
import { FilterPipe } from './shared/filter.pipe';
import { Main1ItemComponent } from './main1/main1-item/main1-item.component';

import { BuyComponent } from './buy/buy.component';
import { Main2ItemComponent } from './main2/main2-item/main2-item.component';
import { GooglePayButtonComponent, GooglePayButtonModule } from "@google-pay/button-angular";
import { CashComponent } from './cash/cash.component';
import {MatDialogModule , MatDialogConfig} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
// import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { StoreItemsComponent } from './store/store-items/store-items.component';
import { AddComponent } from './add/add.component';
import { ReviewItemComponent } from './review/review-item/review-item.component';
import { UserComponent } from './user/user.component';
import { filter } from 'rxjs';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { OtpComponent } from './otp/otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import {MatIconModule} from '@angular/material/icon';

import { OrderPlacedComponent } from './order-placed/order-placed.component';
import {MatBadgeModule} from '@angular/material/badge';

// import { PlacesComponent } from './city/places/places.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Main1Component,
    Main2Component,
    FooterComponent,
    ReviewComponent,
    StoreComponent,
    SliderComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent,
   
    CartComponent,
    CartItemComponent,
    City1Component,
    PlacesComponent,
    FilterPipe,
    Main1ItemComponent,
   

    BuyComponent,
    ProductsComponent,
    ProductItemComponent,
    Main2ItemComponent,
     CashComponent,
     StoreItemsComponent,
     AddComponent,
     ReviewItemComponent,
     UserComponent,
     OtpComponent,
     OrderPlacedComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgbModule,
    FormsModule,ReactiveFormsModule,
    GooglePayButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgOtpInputModule,
    MatIconModule,
    MatBadgeModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[CashComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
