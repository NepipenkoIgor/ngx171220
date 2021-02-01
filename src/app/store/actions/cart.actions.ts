import { createAction, props } from '@ngrx/store';
import { IProduct } from '../reducers/products.reducer';

export const addProductToCart = createAction('[Cart module] add product', props<{ product: IProduct }>());
export const removeProductFromCart = createAction('[Cart module] remove product', props<{ id: string }>());
export const incrementProductInCart = createAction('[Cart module] increment product', props<{ id: string, count: number }>());
export const decrementProductInCart = createAction('[Cart module] decrement product', props<{ id: string,  count: number }>());
