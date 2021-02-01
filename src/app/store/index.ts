import { IProductsState, productsReducer } from './reducers/products.reducer';
import { EntityState } from '@ngrx/entity/src/models';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';
import { IUser, userReducer } from './reducers/user.reducer';


export interface IRootState {
  products: IProductsState;
  cart: EntityState<ICartProduct>;
  user: IUser;
}

export const reducers: any = {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer
};
