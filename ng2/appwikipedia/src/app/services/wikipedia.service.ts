import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams } from '@angular/http';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class WikipediaService {

  constructor(private jsonp: Jsonp) { }

  search(term: string) {
    let url = "http://en.wikipedia.org/w/api.php";

    let params = new URLSearchParams();
    params.set('search', term);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(url, {search: params})
      .map(response => <string[]>response.json()[1]);
  }

}
