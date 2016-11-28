import { Component, OnInit } from '@angular/core';
import { ProductlistService } from './productlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductlistService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private products;
  private productName: string;

  constructor(private ps: ProductlistService) {}

  ngOnInit() {
    this.products = this.ps.getProducts();
  }
}
