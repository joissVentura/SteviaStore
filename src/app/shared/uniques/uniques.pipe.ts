import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/model/product.model';

@Pipe({
  name: 'uniques'
})
export class UniquesPipe implements PipeTransform {

  constructor() {

  }
  transform(products: Product[], id: string): any {
    /* return ([...new Set(products)]); */
    const countedObjects: object[] = [];

    for (const object of products) {
      const countObject: any = countedObjects.find(obj => obj[id] === object[id]);
      if (countObject) {
        countObject.count++;
      } else {
        countedObjects.push({ ...object, count: 1 });
      }
    }

    return countedObjects;
  }

}
