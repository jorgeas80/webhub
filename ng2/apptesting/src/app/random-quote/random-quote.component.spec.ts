/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RandomQuoteComponent } from './random-quote.component';
import { QuoteService } from './../quote.service';

describe('Component: RandomQuote', () => {

  let spy: jasmine.Spy;  
  let comp: RandomQuoteComponent;
  let fixture: ComponentFixture<RandomQuoteComponent>;
  let componentQuoteService: QuoteService; // the actually injected service
  let quoteService: QuoteService; // the TestBed injected service
  let de: DebugElement;  // the DebugElement with the welcome message
  let el: HTMLElement; // the DOM element with the welcome message

  let quoteServiceStub = {
    quotes: [],
    getRandomQuote: () => {
      return {
        "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
        "author": "Jan L. A. van de Snepscheut"
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomQuoteComponent], // declare the test component

     // providers:    [ QuoteService ]  // NO! Don't provide the real service!

      // Provide a test-double instead
      providers:    [ {provide: QuoteService, useValue: quoteServiceStub } ]
    });

    fixture = TestBed.createComponent(RandomQuoteComponent);
    comp = fixture.componentInstance; // RandomQuoteComponent test instance

    // UserService actually injected into the component
    componentQuoteService = fixture.debugElement.injector.get(QuoteService);;

    // UserService from the root injector. 
    quoteService = TestBed.get(QuoteService);

    // query for the title <p> by CSS element selector
    de = fixture.debugElement.query(By.css('p'));
  });

  it('should return the expected line', () => {
    fixture.detectChanges(); 
    const line = de.children[0].nativeElement.textContent;

    expect(line).toEqual("In theory, there is no difference between theory and practice. But, in practice, there is.");
  });

  it('should return the expected line using a spy', () => {
    spy = spyOn(quoteService, 'getRandomQuote').and.returnValue({
        "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
        "author": "Jan L. A. van de Snepscheut"
      });

    fixture.detectChanges();

    expect(spy.calls.mostRecent().returnValue.line).toEqual("In theory, there is no difference between theory and practice. But, in practice, there is.");
  });

  it('should return the expected author using a spy', () => {
    spy = spyOn(quoteService, 'getRandomQuote').and.returnValue({
        "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
        "author": "Jan L. A. van de Snepscheut"
      });

    fixture.detectChanges();

    expect(spy.calls.mostRecent().returnValue.author).toEqual("Jan L. A. van de Snepscheut");
  });  

  it('should return the expected author', () => {
    fixture.detectChanges();
    const author = de.nativeElement.textContent;

    expect(author).toContain("Jan L. A. van de Snepscheut");
  });

  it('should inject the component\'s QuoteService instance',
    inject([QuoteService], (service: QuoteService) => {
    expect(service).toBe(componentQuoteService);
  }));

  it('TestBed and Component QuoteService should be the same', () => {
    expect(quoteService === componentQuoteService).toBe(true);
  });
});
