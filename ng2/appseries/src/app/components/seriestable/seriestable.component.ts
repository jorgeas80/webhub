import { MyseriesService } from '../../services/myseries.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { TVMAZE_API_URL } from '../../app.tokens';
import { TvmazeService } from '../../services/tvmaze.service';
import { Serie } from '../../model/serie.model';

@Component({
  selector: 'app-seriestable',
  templateUrl: './seriestable.component.html',
  styleUrls: ['./seriestable.component.css'],
  providers: [
    {
      provide: TVMAZE_API_URL,
      useValue: 'http://api.tvmaze.com/schedule?country=US'
    },
    TvmazeService,
    MyseriesService],
  inputs: ['d', 'filter'],
  outputs: ['noseries']
})
export class SeriestableComponent implements OnInit {
  private series: Array<Serie>;
  private d: Date;
  private filter: string;
  private field: string;
  private reverse: boolean;
  private errorseries: EventEmitter<string>;
  private myseries: Array<Serie>;

  constructor(private ts: TvmazeService, private ms: MyseriesService) {
    this.errorseries = new EventEmitter<string>();
  }

  ngOnInit() {
    this.field = 'name';
    this.reverse = false;

    this.ts.getSeries(this.d).subscribe(
      series => this.series = series,
      error => this.EmitError(error)
    );

    this.getMySeries();
  }

  addToMySeries(serie) {
    this.ms.addSerie(serie).subscribe(
      s => {this.getMySeries(); alert(s.name + ' añadida a mis series'); },
      error => this.handleError(error)
    );
  }

  inMySeries(id) {
    for (let i in this.myseries) {
      if (this.findById(this.myseries[i], id)) {
        return true;
      }
    };

    return false;
  }


  private EmitError(error) {
    this.errorseries.emit('Lista de series no disponible');
  }

  private getMySeries() {
    this.ms.getSeries().subscribe(
      series => this.myseries = series,
      error => this.handleError(error)
    );
  }

  private findById(element, id) {
    return (element.id === id);
  }

  private handleError(error) {
    // TODO: do something
  }

}
