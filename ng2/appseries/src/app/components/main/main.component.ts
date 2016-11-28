import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private errorMsg: string;
  private hasSeries: boolean;
  private d: Date;
  private searchTerm: string;

  constructor() { }

  ngOnInit() {
    this.errorMsg = '';
    this.hasSeries = true;
    this.d = null;
    this.searchTerm = '';
  }

  setDate($event) {
    this.d = $event;
  }

  onErrorSeries($event) {
    this.hasSeries = false;
    this.errorMsg = $event;
  }

  onFilterSeries($event) {
    this.searchTerm = $event;
  }

}
