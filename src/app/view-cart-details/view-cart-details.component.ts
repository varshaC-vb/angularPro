import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-cart-details',
  templateUrl: './view-cart-details.component.html',
  styleUrls: ['./view-cart-details.component.css']
})
export class ViewCartDetailsComponent implements OnInit {
  productData;
  addToCartValue: number = 1;
  constructor(private apiService:ApiService, private route: Router) { }

  ngOnInit(): void {
this.apiService.getSingleProductApiData().subscribe((resp)=>{
  this.productData = resp;
})

  }
  incrementValue() {
    let value: any = this.addToCartValue
    if (value < 10) {
      value++;
      this.addToCartValue = value;
    }
  }
  decrementValue() {
    let value: any = this.addToCartValue
    if (value > 1) {
      value--;
      this.addToCartValue = value;
    }

  }
  onCheckout() {
    this.route.navigateByUrl('/checkout')
  }

}
