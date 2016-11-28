import { Observable } from 'rxjs/Rx';
import { WikipediaService } from './services/wikipedia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WikipediaService]
})
export class AppComponent implements OnInit {
  private items: Observable<string[]>;

  constructor(private ws: WikipediaService) {}

  ngOnInit() {}

  search(term: string) {
    this.items = this.ws.search(term);
  }
}
