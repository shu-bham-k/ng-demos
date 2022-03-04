import { GroupsService } from './groups.service';

import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupsData } from 'src/assets/data/table-data';



@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  option='Groups';
  tableData:any;


  constructor(private modalService: NgbModal,public dataService : GroupsService) { }

 

  ngOnInit(): void 
  { 
    this.dataService.getUsers()
        .subscribe(data => this.tableData = data);

    this.option = "Groups";
    // this.loadPageData();
    // this.pageList(); 
    // console.log(this.pages); 
    this.dataService.getUsers()
    .subscribe(data => this.result = data);
  }
result!:GroupsData[]
  
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
    this.tableData.splice(index,1);  
  }  

 
  
  search(value:string){
    
    console.log(value)
    if(!value.trim()){
      return this.ngOnInit();
    }else{
   this.result= this.tableData.filter((result:GroupsData) => {
      return result.name.toLocaleLowerCase().match(value.toLocaleLowerCase())
    })
  }
  }

   // Pagination parameters.
   POSTS: any;
   page: number = 1;
   count: number = 0;
   tableSize: number = 10;

   onTableDataChange(event: any) {
    this.page = event;
    
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    
  }

  subgroup:boolean=false;
  changeView(name:string,state:boolean)
  {
    this.subgroup = state;
    this.option = name;
  }
}
