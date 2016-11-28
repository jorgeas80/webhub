import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickme2',
  templateUrl: './clickme2.component.html',
  styleUrls: ['./clickme2.component.css']
})
export class Clickme2Component implements OnInit {

  private clickMessage: string;

  constructor() { }

  ngOnInit() {
    this.clickMessage = '';
  }

  onClickMe($event) {
    let msg = event ? 'SOLO ME VOY A COMER SI ME LO PIDE UN ' + 
    (<HTMLInputElement>event.target).tagName : 'NO ME VOY A COMER';
    this.clickMessage = msg;
  }
}
