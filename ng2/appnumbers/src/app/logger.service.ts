import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor(private enabled: boolean) { }

  debug(message) {
    if (this.enabled) {
      console.log('DEBUG:' + message);
    }
  }

}
