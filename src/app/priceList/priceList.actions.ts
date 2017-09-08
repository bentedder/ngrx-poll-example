import { Action } from '@ngrx/store';

export const FETCH_PRICES = 'Fetch Prices from API';
export class FetchPrices implements Action {
  readonly type = FETCH_PRICES;
}

export const RECEIVE_PRICES = 'Receive Prices';
export class ReceivePrices implements Action {
  readonly type = RECEIVE_PRICES;
  constructor(public payload: any) {}
}

export type Actions = | FetchPrices | ReceivePrices;
