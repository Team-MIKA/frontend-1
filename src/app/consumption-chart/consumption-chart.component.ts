import {Component, Input, OnInit} from '@angular/core';
import {Color} from "@swimlane/ngx-charts";
import {Transaction} from "../../../generated/api/models/transaction";

@Component({
  selector: 'app-consumption-chart',
  templateUrl: './consumption-chart.component.html',
  styleUrls: ['./consumption-chart.component.scss']
})
export class ConsumptionChartComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  data = new Map<string, number>();
  result = [];

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Kategori';
  showYAxisLabel = true;
  yAxisLabel = 'Forbrug';

  colorScheme: Color = {
    group: undefined, name: "", selectable: false,
    domain: ['#91BE1F', '#254B68', '#103757']
  };

  constructor() {

  }

  onSelect(event) {
    console.log(event);

  }

  ngOnInit(): void {

    this.transactions.forEach(t => {
      this.data.set(t.transactionCategory.toString(), (this.data.get(t.transactionCategory.toString()) ?? 0) + t.amount);
    });
    let jsonObject = {};
    this.data.forEach((value, key) => {
      this.result.push({
        "name": key,
        "value": value
      });
    });
  }
}
