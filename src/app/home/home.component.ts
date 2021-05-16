import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productData
  constructor(private apiService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.apiService.getApiData().subscribe((resp) => {
      this.productData = resp;
      console.log(this.productData)
    })
  }

   getDetails(i,product)
  {
    this.apiService.productDetails = JSON.stringify(product)
  }

}
