import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ITransactionRecord } from 'src/app/interfaces/transaction-record';
import { ActivatedRoute } from '@angular/router';
import { ISummaryRecord } from 'src/app/interfaces/summary-record';

@Component({
  selector: 'app-user-quarterly-summary',
  templateUrl: './user-quarterly-summary.component.html',
  styleUrls: ['./user-quarterly-summary.component.scss']
})
export class UserQuarterlySummaryComponent implements OnInit {
  summaryTableColumns: string[] = ['month', 'transactions-value', 'rewards', 'monthdata',];
  monthTransactionTableColumns: string[] = ['id', 'transaction-value', 'rewards', 'date',];
  username: string = '';
  transactionData: ITransactionRecord[] = [];
  monthwiseSummaryData: ISummaryRecord[] = [];
  monthTransactionData: ITransactionRecord[] = [];

  constructor(private route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.transactionData = this._apiService.transactionList;
      this.monthwiseSummaryData = this._getQuarterlySummary();
    });
  }

  showMonthlyTransactionList(date: any) {
    this.monthTransactionData = this.transactionData.filter((record) => ((this.getMonthNumber(record.transactionDate) == date) && (record.username == this.username)));
    console.log(this.monthTransactionData);
  }

  getMonthName(month: number) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month - 1];
  }

  getMonthNumber(date: Date): number {
    return (new Date(date).getMonth() + 1);
  }

  /// Process the [transactionData] and convert it into [ISummaryRecord]
  _getQuarterlySummary(): ISummaryRecord[] {
    var monthwiseData: any = {};

    this.transactionData.forEach(transaction => {
      const transactionMonth = this.getMonthNumber(transaction.transactionDate);
      if (monthwiseData.hasOwnProperty(transactionMonth)) {
        monthwiseData[transactionMonth].month = transactionMonth;
        monthwiseData[transactionMonth].transactionValue += transaction.transactionValue;
        monthwiseData[transactionMonth].rewardsEarned += transaction.rewardsEarned;
      } else {
        var newMonthData = { 'month': transactionMonth, 'transactionValue': 0, 'rewardsEarned': 0 };
        monthwiseData[transactionMonth] = newMonthData;
      }
    });

    return Object.values(monthwiseData);
  }

}
