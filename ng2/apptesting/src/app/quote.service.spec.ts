/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed, inject } from '@angular/core/testing';
import { QuoteService } from './quote.service';

describe('Service: Quote', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteService]
    });
  });

  it('should instantiate the service', inject([QuoteService], (service: QuoteService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a JSON object containing quote and author when asked for a random quote', inject([QuoteService], (service: QuoteService) => {
  let quote = service.getRandomQuote();

  expect(quote.author).toBeTruthy();
  expect(quote.line).toBeTruthy();

}));
});
