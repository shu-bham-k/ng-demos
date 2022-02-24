import { Component, OnInit } from '@angular/core';
import { today,header,tableData } from '../../../../assets/data/dashboard-today';
import { TableData } from '../../../../assets/data/table-data';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  tableData:TableData[] = tableData;
  today:number[] = today;

  constructor() { }

  ngOnInit(): void {
  }

}
