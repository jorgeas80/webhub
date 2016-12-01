/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { QuoteService } from './quote.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('App: Ejer12', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // Don't really need those declarations. Here, we're just testing the creation of main app
        // So, if we don't declare all the components used for the app, need to 
        //BannerComponent,
        //RandomQuoteComponent
      ],
      providers: [QuoteService],

      // If we don't declare all the used components (we're not really using them here), we will render
      // the template without children. So, we need to use CUSTOM_ELEMENTS_SCHEMA
      // Check https://vsavkin.com/three-ways-to-test-angular-2-components-dcea8e90bd8d#.vwotlxl0c
      // Check https://angular.io/docs/ts/latest/api/core/index/NgModule-interface.html
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
