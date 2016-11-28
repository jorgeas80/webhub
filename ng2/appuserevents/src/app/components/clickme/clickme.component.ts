import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickme',
  templateUrl: './clickme.component.html',
  styleUrls: ['./clickme.component.css']
})
export class ClickmeComponent implements OnInit {
  private clickMessage: string;

  constructor() { }

  ngOnInit() {
    this.clickMessage = '';
  }

  onClickMe() {
    this.clickMessage = 'VAMONOS A COMER';
  }

}
