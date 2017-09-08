import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PriceListService {
  constructor(private http: HttpClient) {}

  fetchPrices(): any {
    return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }
}
