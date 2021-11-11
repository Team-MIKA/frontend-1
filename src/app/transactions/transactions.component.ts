import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from "../../../generated/api/models/account";
import { Transaction } from "../../../generated/api/models/transaction";
import { ApiService } from "../../../generated/api/services/api.service";
import {Sort} from "@angular/material/sort";
import {last} from "rxjs/operators";

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

    public account!: Account;
    public transactions!: Transaction[];
    public displayedColumns = [ 'date', 'description', 'category', 'amount'];

    lastSorted: any;

    sortedData: Transaction[] = [];

    constructor(private apiService: ApiService, private route: ActivatedRoute) {
      // this.sortedData = this.transactions.slice();
    }

    ngOnInit() {
        this.updateTransactions();
        setInterval(() => this.updateTransactions(), 1000)
    }

    private updateTransactions() {
        this.route.paramMap.subscribe(params => {
            const accountId = params.get('accountId');
            if (accountId) {
                this.apiService.accountAccountIdGet({accountId}).toPromise().then(
                    (account: Account) => {
                        this.account = account;
                        this.apiService.transactionAccountIdGet({accountId}).toPromise().then(
                            (transactions: Transaction[]) => {this.transactions = transactions}
                        ).then(n => {
                          if (this.lastSorted == null) {
                            this.sortedData = this.transactions.slice();
                          }
                          else {
                            this.sortData(this.lastSorted);
                          }
                        });
                    }
                );
            }
        });
    }

  sortData(sort: Sort) {
    this.lastSorted = sort;
    const data = this.transactions.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'description':
          return this.compare(a.description as string, b.description as string, isAsc);
        case 'amount':
          return this.compare(a.amount as number, b.amount as number, isAsc);
        case 'date':
          return this.compare(a.date as string, b.date as string, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
