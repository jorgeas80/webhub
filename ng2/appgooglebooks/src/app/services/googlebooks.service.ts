import { Http, Response } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { GOOGLE_BOOKS_SEARCH_URL } from '../app.tokens';
import 'rxjs/add/operator/map';

@Injectable()
export class GooglebooksService {

  constructor(private http: Http, @Inject(GOOGLE_BOOKS_SEARCH_URL) private baseUrl) { }

  getBooks(title:string) {
    let url = this.baseUrl + title;

    return this.http.get(url)
      .map(response => this.extractTitles(response));
  }

  extractTitles(response: Response) {
    return response.json().items.map(book => book.volumeInfo.title);
  }
}
