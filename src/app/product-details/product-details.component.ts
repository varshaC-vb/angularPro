import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData;
  addToCartValue: Number = 1;
  CART_VALUE=0;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.productData = JSON.parse(this.apiService.productDetails)

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

  addToCart() {
    let requestObj =  {
      userId:this.productData.id,
      date:new Date(),
      products:[{productId:this.productData.id,quantity:this.addToCartValue}]
  }
    this.apiService.fetchCartData(requestObj).subscribe((resp)=>{
      console.log(resp);
    })
    this.apiService.getAllCartDetails().subscribe((resp) => {      
      this.apiService.dataSource(resp.length);
    })
  }

}
