import { ApiService } from 'src/app/api.service';
import { GroupsService } from '../groups.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subgroups',
  templateUrl: './subgroups.component.html',
  styleUrls: ['./subgroups.component.css']
})
export class SubgroupsComponent implements OnInit {
  result: any;
  members:any;
  constructor(public dataService:GroupsService , public apiService:ApiService,private route: ActivatedRoute) { }

  option='Subgroups';

  ngOnInit(): void {
    this.dataService.getUsers()
        .subscribe(data => this.result = data);

   this.apiService.getMembers()
        .subscribe(data => this.members = data);

  this.getId()
  }

  getId(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.dataService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
    console.log(id)
  }
  changeColor:boolean=false;
  public isCollapsed = true;
  dropdown(){
    this.isCollapsed = !this.isCollapsed;
    this.changeColor = !this.changeColor;
   
  }
  timer:boolean=true;
 
 
  

  //pagination

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;

  onTableDataChange(event: any) {
   this.page = event;
   
 }
 onTableSizeChange(event: any): void {
   this.tableSize = event.target.value;
   this.page = 1;
   
 }
 
}
