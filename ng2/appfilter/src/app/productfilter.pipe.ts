import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: any, filter: string): any {
    filter = filter ? filter.toLocaleLowerCase() : null;

    return filter ?
      value.filter((product) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1) :
      value;
  }

}
