import { Serie } from '../../model/serie.model';
import { MyseriesService } from '../../services/myseries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myseries',
  templateUrl: './myseries.component.html',
  styleUrls: ['./myseries.component.css'],
  providers: [MyseriesService]
})
export class MyseriesComponent implements OnInit {
  private myseries: Array<Serie>;

  constructor(private s: MyseriesService) {
    this.myseries = [];
  }

  ngOnInit() {
    this.getMySeries();
  }

  deleteFromMySeries(id) {
    this.s.deleteSerie(id).subscribe(
      s => { this.getMySeries(); alert('Serie borrada de mis series'); },
      error => this.handleError(error)
    );
  }

  // not really used
  onFilterSeries($event) {
  }

  private getMySeries() {
    this.s.getSeries().subscribe(
      series => this.myseries = series,
      error => this.handleError(error)
    );
  }

  private handleError(error) {
    // TODO: Do something
  }

}
