import { IProductsState, productsReducer } from './reducers/products.reducer';


export interface IRootState {
  products: IProductsState
}

export const reducers: any = {
  products: productsReducer
};
