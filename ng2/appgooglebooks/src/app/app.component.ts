import { GOOGLE_BOOKS_SEARCH_URL } from './app.tokens';
import { GooglebooksService } from './services/googlebooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: GOOGLE_BOOKS_SEARCH_URL,
      useValue: 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    },
    GooglebooksService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private books: string[];

  constructor(private bs: GooglebooksService) {}

  ngOnInit() {
    this.books = [];
  }

  search(title: string) {
    this.bs.getBooks(title).subscribe(
      books => this.books = books,
      error => console.log(error)
    );
  }
}
