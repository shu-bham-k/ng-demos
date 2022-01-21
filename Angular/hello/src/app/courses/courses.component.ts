import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1500/700`);

}
