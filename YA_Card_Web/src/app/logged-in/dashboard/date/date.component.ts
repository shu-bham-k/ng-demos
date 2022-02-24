import { Component, OnInit } from '@angular/core';
import { today,header,tableData } from '../../../../assets/data/dashboard-today';
import { TableData } from '../../../../assets/data/table-data';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  tableData:TableData[] = tableData;
  today:number[] = today;
  constructor() { }

  ngOnInit(): void {
  }

}
