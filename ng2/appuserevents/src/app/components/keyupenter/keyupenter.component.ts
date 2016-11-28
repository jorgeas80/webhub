import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyupenter',
  templateUrl: './keyupenter.component.html',
  styleUrls: ['./keyupenter.component.css']
})
export class KeyupenterComponent implements OnInit {
  private values: string;

  constructor() { }

  ngOnInit() {
    this.values = '';
  }

}
