import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { IProduct } from './products.reducer';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { addProductToCart, decrementProductInCart, incrementProductInCart, removeProductFromCart } from '../actions/cart.actions';
import { EntityState } from '@ngrx/entity/src/models';

export interface ICartProduct extends IProduct {
  count: number;
}

export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter<ICartProduct>({
  selectId: (product: ICartProduct) => product._id
});

export const initialState = adapter.getInitialState();


const reducer = createReducer(
  initialState,
  on(addProductToCart, (stateOfCurrentField: EntityState<ICartProduct>, {product}) => {
    const entity = stateOfCurrentField.entities[product._id] as ICartProduct;
    let count = 1;
    if (entity) {
      count = entity.count + 1;
    }
    return adapter.upsertOne({...product, count}, stateOfCurrentField);
  }),
  on(removeProductFromCart, (stateOfCurrentField: EntityState<ICartProduct>, {id}) => {
    return adapter.removeOne(id, stateOfCurrentField);
  }),
  on(incrementProductInCart, (stateOfCurrentField: EntityState<ICartProduct>, {id, count}) => {
    return adapter.updateOne({id, changes: {count}}, stateOfCurrentField);
  }),
  on(decrementProductInCart, (stateOfCurrentField: EntityState<ICartProduct>, {id, count}) => {
    return adapter.updateOne({id, changes: {count}}, stateOfCurrentField);
  }),
);

export function cartReducer(stateOfCurrentField: EntityState<ICartProduct>, action: Action): any {
  return reducer(stateOfCurrentField, action);
}


export const {
  selectAll,
} = adapter.getSelectors();

export const selectCartState = createFeatureSelector<EntityState<ICartProduct>>('cart');
export const selectCartProducts = createSelector(
  selectCartState,
  selectAll,
);
