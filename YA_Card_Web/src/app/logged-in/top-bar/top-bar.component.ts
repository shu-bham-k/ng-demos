import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit 
{

  @Input('option') displayName?:string ;
  @Input('back') backButton?:boolean;
  @Output() show = new EventEmitter<boolean>();

  changeView()
  {
    this.show.emit(!this.backButton);
    this.backButton=!this.backButton;
  }
  constructor() { }

  ngOnInit(): void 
  {
  }

}
