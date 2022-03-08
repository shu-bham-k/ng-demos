import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupsMember } from 'src/assets/data/table-data';
import { ApiService } from '../../api.service';
import { GroupsService } from '../groups/groups.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  result: any;
  members:any;
  showGroupMembers: boolean =true;
  constructor(public dataService:GroupsService , public apiService:ApiService,private modalService: NgbModal,public router:Router, private route: ActivatedRoute) { }

  option='Jack Group';
public id:any;
  ngOnInit(): void {
    this.dataService.getUsers()
        .subscribe(data => this.result = data);

   this.apiService.getMembers()
        .subscribe(data => this.members = data);


  const id = parseInt(this.route.snapshot.queryParams['id']);
  this.id = id;
  
  }
  
  changeColor:boolean=false;
  
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

 showSubgroup:boolean=true;
 onclick(){
   this.showSubgroup=!this.showSubgroup;
 }

 detail:boolean=true;
 subgroup(){
   this.detail=false;
 }

 groupmember(){
 this.showGroupMembers=!this.showGroupMembers
 }
 
 @Input() data ='';

 // delete


  
  closeResult!: string   
  products :any [] =[];  

 open(content:any,index:any) {  
  this.modalService.open(content, {  centered: true }).result.then((result:any) => {  
    this.closeResult = `Closed with: ${result}`;  
    if (result === 'yes') {  
      this.deleteHero(index);  
    }  
  }, (reason:any): void => {  
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
  });  
}

private getDismissReason(reason: any): string {  
  if (reason === ModalDismissReasons.ESC) {  
    return 'by pressing ESC';  
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {  
    return 'by clicking on a backdrop';  
  } else {  
    return `with: ${reason}`;  
  }  
}  

deleteHero(index:any) {  
  this.result.splice(index,1);  
}  

}
