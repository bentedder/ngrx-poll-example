import { HttpClientModule } from '@angular/common/http';
import { PriceListService } from './priceList/priceList.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { PriceListEffects } from './priceList/priceList.effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers } from './priceList/priceList.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PriceListEffects])
  ],
  providers: [PriceListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
