import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {
  address;
  name;
  contactNo;

  constructor() { }

  ngOnInit() {
  }
  onPlaceOrder() {
    // this.address = '';
    // this.name = '';
    // this.contactNo = '';
    alert('thank you for using this website')
  }

}
