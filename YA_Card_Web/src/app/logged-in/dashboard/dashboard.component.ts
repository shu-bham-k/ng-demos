import { Component, OnInit } from '@angular/core';
import { TableRows } from '../../../assets/data/table-data';
import { ApiService } from 'src/app/api.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  option='Dashboard';

  date:any=new Date();
  toDate:any=new Date();
  fromDate:any=new Date();

  todayBtn:boolean=true;
  weekBtn:boolean=false;
  monthBtn:boolean=false;
  yearBtn:boolean=false;


  results = 
  {
    "TotalMembers" : 0,
    "TotalGroups" : 0,
    "TotalSubGroups" : 0,
    "TotalPollsCreated" : 0,
    "TotalEventsCreated" : 0,
    "TotalBlogsCreated" : 0
  }

  tableRows:TableRows[] =[];

  day:Date = this.date.getUTCDate();
  month:string=this.date.getUTCMonth()+1;
  year:string = this.date.getFullYear();

  endDate:string="";
  
  fromStartDate( event: MatDatepickerInputEvent<Date>)
  {
    let month:string;
    let dd:string;
    if(event.value)
    {
      let mm = event.value.getMonth()+1;
      let year = event.value.getFullYear();
      let date=event.value.getDate();

      (mm < 9) ? month="0"+mm : month=mm.toString(); 
      (date < 9)?dd="0"+date : dd=date.toString();
      this.fromDate= year+"-"+month+"-"+dd;
    }
    
  }

  toEndDate( event: MatDatepickerInputEvent<Date>)
  {
    let month:string;
    let dd:string;
    if(event.value)
    {
      let mm = event.value.getMonth()+1;
      let year = event.value.getFullYear();
      let date=event.value.getDate();
      

      (mm < 9) ? month="0"+mm : month=mm.toString(); 
      (date < 9)?dd="0"+date : dd=date.toString();
      this.toDate= year+"-"+month+"-"+dd;
    }
  }

  apiData:any;
  constructor(private api:ApiService) 
  {  }

  findWeekDate()
  {
    var day = this.date.getDay(),
        diff = this.date.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    let ans= new Date(this.date.setDate(diff));
    let month:string = (ans.getMonth()+1).toString();
    if (month <= '9') month = "0"+month ;
    return (ans.getFullYear()+"-"+month+"-"+ans.getDate());
  }

  findMonthDate() { return (this.year+"-"+this.month+"-"+"01"); }
  findYearDate() { return (this.year+"-"+"01-01"); }

  apiCalls(startDate:string,endDate:string)
  {
    this.api.members(startDate,endDate).subscribe((data:any)=>{this.results.TotalMembers=data.result});
    this.api.groups(startDate,endDate).subscribe((data:any)=>{this.results.TotalGroups=data.result});
    this.api.subGroups(startDate,endDate).subscribe((data:any)=>{this.results.TotalSubGroups=data.result});
    this.api.polls(startDate,endDate).subscribe((data:any)=>{this.results.TotalPollsCreated=data.result});
    this.api.events(startDate,endDate).subscribe((data:any)=>{this.results.TotalEventsCreated=data.result});
    this.api.blogs(startDate,endDate).subscribe((data:any)=>{this.results.TotalBlogsCreated=data.result});    
  }

  today(startDate?:string)
  {
    startDate = this.endDate;
    this.todayBtn=true;
    this.weekBtn=false;
    this.monthBtn=false;
    this.yearBtn=false;
    this.apiCalls(startDate,this.endDate);
    this.userList(startDate,"");
  }


  thisWeek(startDate?:string)
  {
    startDate = this.endDate;
    this.todayBtn=false;
    this.weekBtn=true;
    this.monthBtn=false;
    this.yearBtn=false;
    this.apiCalls(startDate,this.endDate);
    this.userList(startDate,"");
  }

  thisMonth(startDate?:string)
  {
    startDate = this.findMonthDate();
    this.todayBtn=false;
    this.weekBtn=false;
    this.monthBtn=true;
    this.yearBtn=false;
    this.apiCalls(startDate,this.endDate);
    this.userList(startDate,"");
  }

  thisYear(startDate?:string)
  {
    startDate = this.findYearDate();
    this.todayBtn=false;
    this.weekBtn=false;
    this.monthBtn=false;
    this.yearBtn=true;
    this.apiCalls(startDate,this.endDate);
    this.userList(startDate,"");
  }

  dateRange()
  {
    this.todayBtn=false;
    this.weekBtn=false;
    this.monthBtn=false;
    this.yearBtn=false;
    this.apiCalls(this.fromDate,this.toDate);
    this.userList(this.fromDate,this.toDate);
  }

  userList(startDate:string, endDate:string)
  {

    if (endDate == "") endDate = this.endDate;
    var that = this;
    this.tableRows=[];
    this.api.userList(startDate,endDate).subscribe
    (
      (data:any)=>
      {
        for(let i =0 ; i<data.result.length; i++)
        { 
         let row = {
           userName:data.result[i].userName, 
           firstName :data.result[i].firstName,
           lastName:data.result[i].lastName,
           email:data.result[i].email,
           createdOn:this.parseDate(data.result[i].createdOn),
           status:data.result[i].status
          }
          that.tableRows.push(row);           
        }
      }
    );
  }

  
  parseDate(date:string)
  {
    let year:string;
    let todate:string;
    let month:number;
    let monthName:string="";
    year = date.slice(0,4),
    todate = date.slice(8,10),
    month = parseInt(date.slice(5,7))

    switch(month)
    {
      case 1:monthName = "Jan";break;
      case 2:monthName = "Feb";break;
      case 3:monthName = "Mar";break;
      case 4:monthName = "Apr";break;
      case 5:monthName = "May";break;
      case 6:monthName = "Jun";break;
      case 7:monthName = "Jul";break;
      case 8:monthName = "Aug";break;
      case 9:monthName = "Sep";break;
      case 10:monthName = "Oct";break;
      case 11:monthName = "Nov";break;
      case 12:monthName = "Dec";break;
    }

    return todate+" "+monthName+", "+year;

  }


  ngOnInit(): void 
  {
    if (this.month <= '9') this.month = "0"+this.month;
    this.endDate = this.endDate = this.year+'-'+this.month+'-'+this.day;
    this.today();
  }

}



