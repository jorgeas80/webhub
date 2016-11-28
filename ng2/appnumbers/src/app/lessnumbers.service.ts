import { Injectable } from '@angular/core';

@Injectable()
export class LessnumbersService {
  private numbers: number[];

  constructor() {
    this.numbers = [1, 2, 3, 4, 5, 33, 35, 71, 77];
  }

  getNumbers() {
     return this.numbers;
   }

   isMultipleOf3(n: number): boolean {
    return n % 3 === 0;
  }

  isPrime(n: number): boolean {
    if (n === 2) {
      return true;
    }

    if (n % 2 === 0) {
      return false;
    }

    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }
}
