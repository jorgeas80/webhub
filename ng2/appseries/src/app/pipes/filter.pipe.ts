import { Pipe, PipeTransform } from '@angular/core';
import { Serie } from '../model/serie.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Serie[], filter: string): Serie[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((serie: Serie) =>
            serie.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }

}
