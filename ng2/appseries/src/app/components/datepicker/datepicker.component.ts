import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  outputs: ['dtevt']
})
export class DatepickerComponent implements OnInit {

  private d: Date;
  private dtevt: EventEmitter<Date>;

  constructor() {
    // Can't be instantiated in ngOnInit. It fails
    this.dtevt = new EventEmitter<Date>();
  }

  ngOnInit() {
    this.d = new Date();
    this.dtevt.emit(this.d);
  }

}
