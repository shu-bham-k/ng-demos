import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee',
  template:`
  <h2>Employee List </h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>`
  ,
  styles: []
})
export class EmployeeComponent implements OnInit {

  public employees:any;
  


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
  }

  
}
