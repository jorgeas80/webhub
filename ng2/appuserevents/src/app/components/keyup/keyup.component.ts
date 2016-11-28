import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {

  private values: string;

  constructor() { }

  ngOnInit() {
    this.values = '';
  }

  onKey($event: KeyboardEvent) {
    this.values += (<HTMLInputElement>$event.target).value + ' | ';
  }

}
