import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private show: boolean;

  constructor() {
  }

  ngOnInit() {
    this.show = false;
  }

  showExtraEvent($event) {
    console.log("Muestro info extra: " + $event);
    this.show = $event;
  }
}


