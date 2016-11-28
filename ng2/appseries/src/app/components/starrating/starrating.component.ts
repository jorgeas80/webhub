import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css'],
  inputs: ['r']
})
export class StarratingComponent implements OnInit {
  private r: number;
  private stars: Array<boolean>;

  constructor() {
    this.stars = Array(10);
  }

  ngOnInit() {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i] = (i < this.r);
    }
  }

}
