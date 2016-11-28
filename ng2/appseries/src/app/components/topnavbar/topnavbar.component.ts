import { Component, HostListener, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css'],
  inputs: ['searchEnabled'],
  outputs: ['filterseries']
})
export class TopnavbarComponent implements OnInit {
  private filterseries: EventEmitter<string>;
  private searchEnabled: boolean;

  constructor() {
    this.filterseries = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  emitSearchTerm($event: KeyboardEvent) {
    this.filterseries.emit((<HTMLInputElement>$event.target).value);
  }

}
