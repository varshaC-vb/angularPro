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
  route: any;

  constructor() { }

  ngOnInit() {
  }
  onPlaceOrder() {
    // this.address = '';
    // this.name = '';
    // this.contactNo = '';
    this.route.navigateByUrl('/thankyou')
  }

}
