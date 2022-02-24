import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menu } from '../../../assets/data/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() selectedOption= new EventEmitter<string>();
  menu:string[] = menu;
  option?:string;

  constructor() { }

  ngOnInit(): void {

  }

}
