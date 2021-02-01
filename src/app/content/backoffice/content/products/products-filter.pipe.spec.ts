import { IProduct } from '../../../../store/reducers/products.reducer';
import { ProductsFilterPipe } from './products-filter.pipe';

export const products: IProduct[] = [
  {
    _id: '12312asda124',
    'title': 'Product 1',
    'img': 'assets/img/product-1.jpg',
    'price': 200,
    'author': 'Igor',
    'isFavorite': true
  },
  {
    _id: '12312asda124',
    'title': 'Product 2345',
    'img': 'assets/img/product-2.jpg',
    'price': 221,
    'author': 'Vlad',
    'isFavorite': false
  },
  {
    _id: '12312asda124',
    'title': 'Product 234',
    'img': 'assets/img/product-3.jpg',
    'price': 333,
    'author': 'Igor',
    'isFavorite': true
  },
];

describe('Products Filter Pipe', () => {
  let productsFilterPipe: ProductsFilterPipe;

  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  });

  it('should transform right', () => {
    expect(productsFilterPipe.transform(products, '')).toEqual(products);
    let [, ...result] = products;
    expect(productsFilterPipe.transform(products, '234'))
      .toEqual(result);
    [, ...result] = result;
    expect(productsFilterPipe.transform(products, '234', true))
      .toEqual(result);
  });
});
