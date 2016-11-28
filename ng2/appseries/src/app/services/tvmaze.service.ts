import { Serie } from '../model/serie.model';
import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TVMAZE_API_URL } from '../app.tokens';
import * as moment from 'moment';



@Injectable()
export class TvmazeService {
  constructor(private http: Http, @Inject(TVMAZE_API_URL) private baseUrl) { }

  getSeries(d): Observable<Serie[]> {
    let dateStr: string = moment(d).format('YYYY-MM-DD');
    let url = this.baseUrl + '&date=' + dateStr;

    return this.http.get(url)
      .map(response => this.extractData(response))
      .catch(error => this.handleError(error));
  }

  private extractData(response: Response) {
    let body = response.json();

    if (body) {
      return body.map(serie => this.extractEpisode(serie));
    } else {
      return [];
    }
  }

  private extractEpisode(serie: any) {

    // Need to declare 'any' type to allow adding properties
    let result: any = {};

    result.id = serie.id;
    result.img_url = (serie.show.image && serie.show.image.medium) ? serie.show.image.medium || '' : '';
    result.name = serie.show.name || '';
    result.status = serie.show.status || '';
    result.season = serie.season || '';
    result.episode = serie.number || 0;
    result.runtime = serie.show.runtime || 0;
    result.rating = serie.show.rating.average || 0;

    return result;
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
