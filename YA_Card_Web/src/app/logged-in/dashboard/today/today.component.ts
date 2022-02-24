import { Component, OnInit } from '@angular/core';
import { today,header,tableData } from '../../../../assets/data/dashboard-today';
import { TableData } from '../../../../assets/data/table-data';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  tableData:TableData[] = tableData;
  today:number[] = today;
  constructor() { }

  ngOnInit(): void {
  }

}
