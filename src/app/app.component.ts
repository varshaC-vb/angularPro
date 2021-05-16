import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  cartValue: Number = 0
  subscription: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.cartValue = this.apiService.cartValue
    this.subscription = this.apiService.onDataSource().subscribe((value) => {
      if (value) {
        this.cartValue = value;
      }
    })
    this.apiService.getAllCartDetails().subscribe((resp) => {
      this.cartValue = resp.length;
    })
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}

