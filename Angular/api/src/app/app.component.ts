import { Component, OnInit } from '@angular/core';

import { ConfigService } from './config.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  

 data:any;

  ngOnInit(): void {
    
this.showPosts();


  }
  constructor (private postData:ConfigService) {}
  showPosts(){
    
    this.postData.getPosts().subscribe((result: any)=> {
      console.log("result",result)
      this.data= result
    })
  }
}
