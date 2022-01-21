import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list with Angular';
  list: any[]=[];
  
  addTask(item:string){
    if(item.trim() !== ''){
    this.list.push({id:this.list.length,name:item});
    

    console.warn(this.list);

  }else{
    alert("enter any text");
  }
  }

  done(id:number){
    this.list[id].isCompleted= !this.list[id].isCompleted;
  }

  removeTask(id:number){
    console.warn(id)
    this.list = this.list.filter(item=>item.id!==id)
  }
}
