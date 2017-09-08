import * as priceActions from './priceList.actions';
import { ActionReducerMap } from '@ngrx/store';

export interface StoreState {
  bitcoin: {
    fetching: boolean;
    lastFetch: string;
    eur: string;
    usd: string;
    gbp: string;
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case priceActions.FETCH_PRICES: {
      return {
        ...state,
        fetching: true,
      };
    }
    case priceActions.RECEIVE_PRICES: {
      return {
        ...state,
        ...action.payload,
        fetching: false,
      };
    }
    default: {
      return state;
    }
  }
}

export const reducers: ActionReducerMap<StoreState> = {
  bitcoin: reducer,
};
