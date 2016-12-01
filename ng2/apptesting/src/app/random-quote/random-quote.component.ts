import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.model';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  private quote: Quote;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quote = this.quoteService.getRandomQuote();
  }

}
