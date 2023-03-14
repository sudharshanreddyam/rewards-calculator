import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { ITransactionRecord } from 'src/app/interfaces/transaction-record';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'transaction-value', 'reward-value', 'date', 'quarterly'];
  data: ITransactionRecord[] = [];
  transactionRecords = new MatTableDataSource(this.data);


  constructor(private _apiService: ApiService) { }

  @ViewChild('paginator')
  paginator!: MatPaginator;

  ngOnInit(): void {
    this._apiService.getTransactionRecords().subscribe(records => {
      this.data = JSON.parse(JSON.stringify(records));
      this.transactionRecords = new MatTableDataSource(this.data);
      this.transactionRecords.paginator = this.paginator;
      this._apiService.transactionList =  this.data;
    });
  }

}
