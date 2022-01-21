import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
  <h2> Employee Detail</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
    `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  
  public employees:any;


  constructor(private _employeeService: EmployeeService) { }
  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
  }
}
