import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import * as priceActions from './priceList.actions';
import { PriceListService } from './priceList.service';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/Rx';

@Injectable()
export class PriceListEffects {

  @Effect() $fetchPrices: Observable<Action> = this.actions$
    .ofType(priceActions.FETCH_PRICES)
    .switchMap(() =>
      Observable.timer(0, 5000)
        .switchMap(() =>
          this.priceService.fetchPrices().map(res => {
            const payload = {
              lastFetched: res.time.updated,
              eur: res.bpi.EUR.rate,
              usd: res.bpi.USD.rate,
              gbp: res.bpi.GBP.rate,
            };
            return new priceActions.ReceivePrices(payload);
          })
        )
      );
  constructor(private actions$: Actions,
              private priceService: PriceListService) {}
}
