import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setPassword',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  constructor() { }

  public isCollapsed = true; 

  ngOnInit(): void {
  }

}
