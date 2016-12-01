import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ProductMemDb } from './product-mem-db';
import { ProductsService } from './products.service';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { QuoteService } from './quote.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductManagerComponent } from './product-manager/product-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    RandomQuoteComponent,
    ProductFilterPipe,
    ProductManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductMemDb)
  ],
  providers: [QuoteService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
