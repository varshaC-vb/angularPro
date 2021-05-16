import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ViewCartDetailsComponent } from './view-cart-details/view-cart-details.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ProductDetailsComponent,
      ViewCartDetailsComponent,
      CheckoutCartComponent
   ],
   imports: [
	 BrowserModule,
	 HttpClientModule,
	 AppRoutingModule,
	 FormsModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
