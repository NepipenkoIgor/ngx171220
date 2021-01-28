import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { getProductsError, getProductsPending, getProductsSuccess } from '../actions/products.actions';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../reducers/products.reducer';

@Injectable()
export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending), // filter
    switchMap(() => this.http.get<IProduct[]>('/products')
      .pipe(
        map((products: IProduct[]) => getProductsSuccess({products})),
        catchError(() => of(getProductsError()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
  }
}
