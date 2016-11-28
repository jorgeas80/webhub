import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(array: Array<string>, field: string, reverse: boolean): Array<string> {

    if (array) {
      array.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return (reverse) ? 1 : -1;
        } else if (a[field] > b[field]) {
          return (reverse) ? -1 : 1;
        } else {
          return 0;
        }
      });
    }
    return array;
  }

}
