import { Action, createReducer, on } from '@ngrx/store';
import { getProductsError, getProductsPending, getProductsSuccess } from '../actions/products.actions';

export interface IProduct {
  _id: string;
  title: string;
  img: string;
  price: number;
  author: string;
  isFavorite: boolean;
};

export interface IProductsState {
  items: IProduct[];
  isLoading: boolean;
}

const initialState: IProductsState = {
  items: [],
  isLoading: false
};

const reducer = createReducer(
  initialState,
  on(getProductsPending, (stateOfCurrentField: IProductsState) => {
    return {...stateOfCurrentField, isLoading: true};
  }),
  // tslint:disable-next-line:variable-name
  on(getProductsSuccess, (_stateOfCurrentField: IProductsState, {products: items}) => {
    return {..._stateOfCurrentField, items, isLoading: false};
  }),
  on(getProductsError, (stateOfCurrentField: IProductsState) => {
    return {...stateOfCurrentField, isLoading: false};
  }),
);

export function productsReducer(stateOfCurrentField: IProductsState, action: Action): any {
  return reducer(stateOfCurrentField, action);
}
