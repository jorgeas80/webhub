import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  private products: Array<Product>;
  private errorMessage: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
                     .subscribe(
                       products => this.products = products,
                       error =>  this.errorMessage = <any>error);
  }

  addProduct (name: string) {
    if (!name) { return; }
    this.productsService.addProduct(name)
                     .subscribe(
                       product  => this.products.push(product),
                       error =>  this.errorMessage = <any>error);
  }
}