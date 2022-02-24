import { Component, OnInit } from '@angular/core';
import { today,header,tableData } from '../../../../assets/data/dashboard-today';
import { TableData } from '../../../../assets/data/table-data';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  tableData:TableData[] = tableData;
  today:number[] = today;
  constructor() { }

  ngOnInit(): void {
  }

}
