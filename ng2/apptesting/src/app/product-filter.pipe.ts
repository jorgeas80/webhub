import { PipeTransform, Pipe } from '@angular/core';
import { Product } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: Product[], filter: string): Product[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((product: Product) =>
            product.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
