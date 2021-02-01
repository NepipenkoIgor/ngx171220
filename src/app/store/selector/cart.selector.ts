import { createSelector } from '@ngrx/store';
import { ICartProduct, selectCartProducts } from '../reducers/cart.reducer';
import { IUser, selectUserState } from '../reducers/user.reducer';


export const totalProducts = createSelector(
  selectCartProducts,
  (products: ICartProduct[]) => {
    return products.reduce((count, product) => {
      return (count += product.count);
    }, 0);
  }
);

export const cartProductsWithBonuses = createSelector(
  selectCartProducts,
  selectUserState,
  (products: ICartProduct[], user: IUser) => {
    return products.map((product) => {
      return {...product, price: product.count * product.price * user.bonuses};
    });
  }
);
