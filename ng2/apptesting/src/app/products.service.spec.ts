/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ProductsService } from './products.service';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from './product';

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


describe('Service: Products', () => {
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

  it('instantiate service when inject service', inject([ProductsService], (service: ProductsService) => {
    //expect(service).toBeTruthy();
    expect(service instanceof ProductsService).toBe(true);
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
