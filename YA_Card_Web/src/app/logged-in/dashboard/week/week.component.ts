import { Component, OnInit } from '@angular/core';
import { today,header,tableData } from '../../../../assets/data/dashboard-today';
import { TableData } from '../../../../assets/data/table-data';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  tableData:TableData[] = tableData;
  today:number[] = today;
  constructor() { }

  ngOnInit(): void {
  }

}
