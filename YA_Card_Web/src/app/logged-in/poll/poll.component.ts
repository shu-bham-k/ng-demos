

import { Component, OnInit } from '@angular/core';
import { pollsData, today } from 'src/assets/data/dashboard-today';
import { PollsData } from 'src/assets/data/table-data';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  option='Poll'
  result!:PollsData[];
  
  constructor(private modalService: NgbModal) { }

  data:PollsData[] = pollsData;
  today:number[] = today;

  // Pagination parameters.
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
 

  ngOnInit(): void {
    this.result = this.data;
    
  }

  text:any= "lipsum as it sometimes known, is dummy text used in laying out print, graphic or web designs?"

  

  options:any[] = ['Option One','Option Two','Option Three','Option Four']

  votes:any[]=['40','25','60','10']

  votesCount : any[]=['(288 votes)','(82 votes)','(400 votes)','(28 votes)']

  totalVotes : string[] =['912 Votes','810 Votes', '510 Votes', '400 Votes']


  onTableDataChange(event: any) {
    this.page = event;
    
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    
  }

 
  //delete

  closeResult!: string   
  products :any [] =[];  
 
  open(content:any,index:any) {  
    this.modalService.open(content, {  centered: true }).result.then((result) => {  
      this.closeResult = `Closed with: ${result}`;  
      if (result === 'yes') {  
        this.deleteHero(index);  
      }  
    }, (reason) => {  
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
    this.data.splice(index,1);  
  }  
  
  //search
   


  search(value:string){
    
    console.log(value)
    if(!value.trim()){
      return this.ngOnInit();
    }else{
    this.result = this.data.filter(result => {
      return result.fullName.toLocaleLowerCase().match(value.toLocaleLowerCase())
    })
  }
  }

}
