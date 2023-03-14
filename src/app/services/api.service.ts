import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ITransactionRecord } from '../interfaces/transaction-record';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  transactionList: ITransactionRecord[] = [];

  transaction_record_api = 'https://my.api.mockaroo.com/transaction_records.json?key=1e236000';
  constructor(private http: HttpClient) { }

  getTransactionRecords() {
    return this.http.get(this.transaction_record_api);
  }
}
