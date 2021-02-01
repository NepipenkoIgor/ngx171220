import { Action, createFeatureSelector, createReducer } from '@ngrx/store';

export interface IUser {
  name: string;
  bonuses: number;
};


const initialState: IUser = {
  name: 'Ihor',
  bonuses: 0.8,
};

const reducer = createReducer(
  initialState,
);

export function userReducer(stateOfCurrentField: IUser, action: Action): any {
  return reducer(stateOfCurrentField, action);
}

export const selectUserState = createFeatureSelector<IUser>('user');
