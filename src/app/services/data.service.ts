import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=12').map(
      (res: Response) => res.json()
    );
  }

}
