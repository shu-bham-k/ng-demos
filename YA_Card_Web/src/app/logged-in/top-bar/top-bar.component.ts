import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

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
    this.location.back();
  }
  constructor(private location: Location) { }
test:any
  ngOnInit(): void 
  {
    
    
  }

  @Output() newItemEvent = new EventEmitter<any>();

  newItem(value: any) {
   
    this.test = value
    this.newItemEvent.emit(this.test);
    
  }

}
