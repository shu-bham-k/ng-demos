import { SettingsService } from './settings.service';
import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  option='Settings';
  tableData: any;
  constructor(private settingService : SettingsService) { }
 changeColor:boolean=false;
 changeColor2:boolean=false;
 changeColor3:boolean=false;
 changeColor4:boolean=false;

  ngOnInit(): void {
    this.settingService.getSettingsData()
        .subscribe(data => this.tableData = data);
  }

  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  dropdown(){
    this.isCollapsed = !this.isCollapsed;
    this.changeColor = !this.changeColor;
   
  }

  dropdown2(){
    this.isCollapsed2 = !this.isCollapsed2;
    this.changeColor2 = !this.changeColor2;
   
  }
  dropdown3(){
    this.isCollapsed3 = !this.isCollapsed3;
    this.changeColor3 = !this.changeColor3;
   
  }
  dropdown4(){
    this.isCollapsed4 = !this.isCollapsed4;
    this.changeColor4 = !this.changeColor4;
   
  }
  timer:boolean=true;
 editTimer(){
   this.timer=false;
 }

 saveTimer(){
   this.timer=true;
 }

 textArea_terms:boolean=false;
 editTerms(){
  this.textArea_terms = true
 }

 saveTerms(){
   this.textArea_terms = false;
 }

 textArea_privacy:boolean=false;
 editPrivacy(){
  this.textArea_privacy = true
 }

 savePrivacy(){
   this.textArea_privacy= false;
 }

 }




