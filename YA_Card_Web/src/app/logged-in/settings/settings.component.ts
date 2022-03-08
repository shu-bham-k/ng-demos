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
  settingsData: any;
  constructor(private settingService : SettingsService) { }

 changeColorQr:boolean=false;
 changeColorTerms:boolean=false;
 changeColorPrivacy:boolean=false;
 changeColorAbout:boolean=false;

 public isCollapsedQr = true;
  public isCollapsedTerms = true;
  public isCollapsedPrivacy = true;
  public isCollapsedAbout = true;

  timer:boolean=true;
  
 textArea_terms:boolean=false;
 textArea_privacy:boolean=false;
  
  ngOnInit(): void {
    this.settingService.getSettingsData()
        .subscribe(data => this.settingsData = data);
  }

  
  dropdownQr(){
    this.isCollapsedQr = !this.isCollapsedQr;
    this.changeColorQr = !this.changeColorQr;
   
  }

  dropdownTerms(){
    this.isCollapsedTerms = !this.isCollapsedTerms;
    this.changeColorTerms = !this.changeColorTerms;
   
  }
  dropdownPrivacy(){
    this.isCollapsedPrivacy = !this.isCollapsedPrivacy;
    this.changeColorPrivacy = !this.changeColorPrivacy;
   
  }
  dropdownAbout(){
    this.isCollapsedAbout = !this.isCollapsedAbout;
    this.changeColorAbout = !this.changeColorAbout;
   
  }
  
 editTimer(){
   this.timer=false;
 }
 editTerms(){
  this.textArea_terms = true
 }
 editPrivacy(){
  this.textArea_privacy = true
 }

 saveTimer(){
   this.timer=true;
 }

 saveTerms(){
   this.textArea_terms = false;
 }

 savePrivacy(){
   this.textArea_privacy= false;
 }

 }




