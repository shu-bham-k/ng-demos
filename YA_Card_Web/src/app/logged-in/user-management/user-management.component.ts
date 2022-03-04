import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/assets/data/table-data';
import { header,tableData } from 'src/assets/data/dashboard-today';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  option='User Management';
  header:string[] = header;
  tableData:TableData[] = tableData;

  show:boolean=false;
  userData: TableData = 
  {
    sno:1000 ,fullName:'Ashirbad Sarangi',emailId:'ashirbad@codestoresolutions.com',doj:'10-Jan-2022',username:'ashirbad',status:'Active',groups:{groupName:['YA Card'],admin:['Nilesh Kumar'],totalMembers:[25]}
  };

  constructor(private modalService: NgbModal) { }

  changeView(arg:string[])
  {
  
    for (let i = 0; i < tableData.length; i++)
      if (
            tableData[i].fullName == arg[0] && 
            tableData[i].emailId == arg[1] &&
            tableData[i].doj == arg[2]
        )  
        this.userData = tableData[i];
    this.show=!this.show;
  }

  console(arg:string)
  {
    console.log(arg);

  }

  ngOnInit(): void 
  { }

  
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
  

}
