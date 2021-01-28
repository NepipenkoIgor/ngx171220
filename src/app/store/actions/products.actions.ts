import { createAction, props } from '@ngrx/store';
import { IProduct } from '../reducers/products.reducer';

export const getProductsPending = createAction('[Products module] pending products from server');
export const getProductsSuccess = createAction('[Products module] set products from server', props<{ products: IProduct[] }>());
export const getProductsError = createAction('[Products module] error when retry products from server');
