/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { ComponentFixture, TestBed, inject, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ProductManagerComponent } from './product-manager.component';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { ProductsService } from '../products.service';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from '../product';

const makeProductsData = () => [
  {
    "id": 1,
    "name": "Leaf Rake",
  },
  {
    "id": 2,
    "name": "Garden Cart",
  },
  {
    "id": 3,
    "name": "Hammer",
  },
  {
    "id": 4,
    "name": "Saw",
  },
  {
    "id": 5,
    "name": "Video Game Controller",
  }
] as Product[];


describe('Component: ProductManager', () => {
  let spy: jasmine.Spy;
  let comp: ProductManagerComponent;
  let fixture: ComponentFixture<ProductManagerComponent>;
  let componentProductsService: ProductsService; // the actually injected service
  let productsService: ProductsService; // the TestBed injected service
  let de: DebugElement;  // the DebugElement with the welcome message
  let el: HTMLElement; // the DOM element with the welcome message


  let backend: MockBackend;
  let service: ProductsService;
  let fakeProducts: Product[];
  let response: Response;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ProductsService,
        { provide: XHRBackend, useClass: MockBackend }]
    });
  }));

  beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
    backend = be;
    service = new ProductsService(http);
    fakeProducts = makeProductsData();
    let options = new ResponseOptions({ status: 200, body: { data: fakeProducts } });
    response = new Response(options);
  }));


  it('should have expected fake products', async(inject([], () => {
    backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

    service.getProducts()
      .do(products => {
        expect(products.length).toBe(fakeProducts.length);
      })
      .toPromise();
  })));

  it('should be OK returning no products', async(inject([], () => {
    let resp = new Response(new ResponseOptions({ status: 200, body: { data: [] } }));
    backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

    service.getProducts()
      .do(products => {
        expect(products.length).toBe(0);
      })
      .toPromise();
  })));
});
