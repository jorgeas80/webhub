import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css'],
  inputs: ['title']
})
export class LegendComponent implements OnInit {
  private showLegend: boolean;
  private title: string;

  constructor() { }

  ngOnInit() {
    this.showLegend = true;
  }

  toggleLegend() {
    this.showLegend = !this.showLegend;
  }

}
