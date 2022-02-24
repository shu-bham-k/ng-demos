import { Component, OnInit } from '@angular/core';
import { today,header,tableData } from '../../../assets/data/dashboard-today';
import { TableData } from '../../../assets/data/table-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  option='Dashboard';
  tabs:string[] = ['Today', 'This Week', 'This Month', 'This Year', 'Date'];
  today:number[] = today;
  events:string[] = ['Members', 'Groups', 'Subgroups', 'Polls Created', 'Events Created', 'Blogs Created'];
  header:string[] = header;
  tableData:TableData[] = tableData;
  format:string[] = ['sno','username','fullName','emailId','doj','status']

  constructor() { }

  ngOnInit(): void {
  }

}
