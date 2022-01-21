import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data: any;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data=JSON.parse(params['data']);
    })

  }

}
