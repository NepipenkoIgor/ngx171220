import { inject, TestBed } from '@angular/core/testing';
import { OneProductInCartComponent } from '../../content/backoffice/content/cart/one-product-in-cart/one-product-in-cart.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL } from '../../config';
import { environment } from '../../../environments/environment';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { IProduct } from '../../store/reducers/products.reducer';

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
describe('Auth interceptor', () => {
  let httpMocked: HttpTestingController;
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneProductInCartComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: BASE_URL,
          useValue: environment.baseUrl,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
      ]
    });

    httpMocked = TestBed.inject(HttpTestingController);

  });

  it('should have accessToken', inject([HttpClient, BASE_URL],
    (httpClient: HttpClient, baseUrl: string) => {
      httpClient.get('/products')
        .subscribe();

      const httpObj = httpMocked.expectOne({
        url: `${baseUrl}/products`,
        method: 'GET'
      });

      expect(httpObj.request.headers.has('Authorization')).toBeTruthy();
      expect(httpObj.request.headers.get('Authorization')).toEqual(`Bearer ${accessToken}`);

    }));

  it('should return products', inject([HttpClient, BASE_URL],
    (httpClient: HttpClient, baseUrl: string) => {
      httpClient.get('/products')
        .subscribe((productsFromResponse: any) => {
          expect(products).toEqual(productsFromResponse);

        });

      const httpObj = httpMocked.expectOne({
        url: `${baseUrl}/products`,
        method: 'GET'
      });

      httpObj.flush({data: products});
    }));
});
