import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ViewCartDetailsComponent } from './view-cart-details/view-cart-details.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product',pathMatch: 'full',  component: HomeComponent },
  { path: 'product/:productId', component: ProductDetailsComponent },
  { path: 'viewcart', component: ViewCartDetailsComponent },
  { path: 'checkout', component: CheckoutCartComponent }
  {path: 'thankyou',component:ThankYouComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
