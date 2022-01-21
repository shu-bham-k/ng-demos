import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail-component',
  templateUrl: './hero-detail-component.component.html',
  styleUrls: ['./hero-detail-component.component.css']
})
export class HeroDetailComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hero?: Hero;

}
