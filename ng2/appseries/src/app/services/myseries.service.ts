import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import { Serie } from '../model/serie.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MyseriesService {
  private baseUrl: string;
  private headers: Headers;

  constructor(private http: Http) { 
    this.baseUrl = "http://localhost:3000/myseries";
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getSeries(): Observable<Serie[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json() || [])
      .catch(error => this.handleError(error));
  }

  getSerie(id): Observable<Serie> {
    let url = this.baseUrl + '/' + id;

    return this.http.get(url)
      .map(response => response.json() || {})
      .catch(error => this.handleError(error));
  }

  addSerie(serie): Observable<Serie> {
    return this.http.post(this.baseUrl, JSON.stringify(serie), {headers: this.headers})
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  deleteSerie(id) {
    let url = this.baseUrl + '/' + id;

    return this.http.delete(url, {headers: this.headers})
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    //console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
