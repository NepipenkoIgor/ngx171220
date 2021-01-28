import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { IProduct } from '../../../../store/reducers/products.reducer';

@Injectable()
export class OneProductResolverService implements Resolve<IProduct | null> {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct | null> {
    console.log(route, state);
    const id = route.paramMap.get('productId');
    return this.http.get<IProduct | null>(`/products/${id}`)
      .pipe(
        map((product: IProduct | null) => {
          if (!product) {
            this.router.navigate(['/backoffice']);
          }
          return product;
        }),
        catchError(() => {
          this.router.navigate(['/backoffice']);
          return of(null);
        })
      );
  }

}
