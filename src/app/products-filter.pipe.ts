import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products';

@Pipe({
  name: 'productsFilter',
  pure: true
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchTerm: string = '', onlyFavorites: boolean = false): IProduct[] {
    let result: IProduct[] = products;
    if (onlyFavorites) {
      result = result.filter((product: IProduct) => {
        return product.isFavorite;
      });
    }
    if (!searchTerm) {
      return result;
    }
    console.log('recalc pipe');
    return result.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
