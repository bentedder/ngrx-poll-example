import { Component, OnInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { StoreState } from './priceList/priceList.reducer';
import * as storeActions from './priceList/priceList.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  fetching$ = this.store.select(state => state.bitcoin);

  constructor(private store: Store<StoreState>) {}

  ngOnInit() {
    this.store.dispatch(new storeActions.FetchPrices());
  }
}
