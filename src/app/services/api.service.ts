import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://fakestoreapi.com/products'
  productDetails: any;
  cartValue: Number;
  subject = new Subject<any>();

  addTocartUrl='https://fakestoreapi.com/carts'

  getAllCartUrl = 'https://fakestoreapi.com/carts'

  getSingleProductUrl = 'https://fakestoreapi.com/products/1'

  constructor(private http: HttpClient) { }

  getApiData(): Observable<any> {
    return this.http.get(this.url);
  }

  dataSource(data) {
    this.subject.next(data);
  }

  onDataSource(): Observable<any> {
    return this.subject.asObservable();
  }
  clearDataSource() {
    this.subject.next();
  }

  fetchCartData(data): Observable<any> {
    return this.http.post(this.addTocartUrl,data);
  }

  getAllCartDetails(): Observable<any>{

    return this.http.get(this.getAllCartUrl);
  }
  getSingleProductApiData(): Observable<any> {
    return this.http.get(this.getSingleProductUrl);
  }
  
}
