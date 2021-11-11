import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { OverviewComponent } from './overview/overview.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharesComponent } from './shares/shares.component';
import { OwnedSharesComponent } from './owned-shares/owned-shares.component';
import { ApiModule } from "../../generated/api/api.module";
import { ApiService } from "../../generated/api/services/api.service";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ErrorCardComponent } from './error-card/error-card.component';
import { CongratulationsDialogComponent } from '../environments/xyz/congratulations-dialog/congratulations-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSortModule} from "@angular/material/sort";
import { ConsumptionChartComponent } from './consumption-chart/consumption-chart.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";

export const routes: Routes = [
    {path: '', component: OverviewComponent},
    {path: 'transactions/:accountId', component: TransactionsComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        AccountsComponent,
        OverviewComponent,
        TransactionsComponent,
        SharesComponent,
        OwnedSharesComponent,
        ErrorCardComponent,
        CongratulationsDialogComponent,
        ConsumptionChartComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    ),
    ApiModule.forRoot(
      {rootUrl: 'http://localhost:8080'}
    ),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSortModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    NgxChartsModule
  ],
    providers: [
        ApiService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
