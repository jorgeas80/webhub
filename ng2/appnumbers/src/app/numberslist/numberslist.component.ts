import { LoggerService } from '../logger.service';
import { LessnumbersService } from '../lessnumbers.service';
import { NumbersService } from '../numbers.service';
import { Component, OnInit, EventEmitter, OpaqueToken, Inject } from '@angular/core';

const TITLE_APP = new OpaqueToken('title');


@Component({
  selector: 'app-numberslist',
  templateUrl: './numberslist.component.html',
  styleUrls: ['./numberslist.component.css'],
  providers: [
    LessnumbersService,
    {
      provide: NumbersService,
      useExisting: LessnumbersService
    },
    {
      provide: LoggerService,
      useFactory: () => {
        return new LoggerService(true);
      }
    },
    {
      provide: TITLE_APP,
      useValue: 'Mi lista de números'
    }],
  inputs: ['title'],
  outputs: ['extra']
})
export class NumberslistComponent implements OnInit {
  //private title: string;
  private numbers: number[];
  private showExtraInfo: boolean;
  private extra = new EventEmitter<boolean>();

  constructor(@Inject(TITLE_APP) private title: string, private logger: LoggerService, private ns: NumbersService) { }

  ngOnInit() {
    this.numbers = this.ns.getNumbers();
    this.showExtraInfo = false;
    //this.extra = new EventEmitter<boolean>();
  }

  colorNumber(n: number): string {
    if (this.ns.isPrime(n)) {
      return 'green';
    } else if (this.ns.isMultipleOf3(n)) {
      return 'red';
    } else {
      return 'black';
    }
  }

  emitEvent() {
    this.showExtraInfo = !this.showExtraInfo;
    this.extra.emit(this.showExtraInfo);
  }

}
