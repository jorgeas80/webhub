import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Product } from './product';

@Injectable()
export class ProductsService {
  private productsUrl = 'app/products';  // URL to web API

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get(this.productsUrl)
                    .map(response => this.extractData(response))
                    .catch(error => this.handleError(error));
  }

  addProduct (name: string): Observable<Product> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.productsUrl, body, options)
                    .map(response => this.extractData(response))
                    .catch(error => this.handleError(error));
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}