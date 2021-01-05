import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchTerm: string): IProduct[] {
    if (!searchTerm) {
      return products;
    }
    console.log('recalc pipe');
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
