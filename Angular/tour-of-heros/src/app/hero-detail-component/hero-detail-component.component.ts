import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail-component',
  templateUrl: './hero-detail-component.component.html',
  styleUrls: ['./hero-detail-component.component.css']
})
export class HeroDetailComponentComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
  ) { 
    
  }
  name!: any
  ngOnInit(): void {
    this.getHero();
  }
  // @Input() hero?: Hero;
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.name= this.hero;
   this.name = this.name.trim()
   if (!this.name) { return; }
  if (this.hero) {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}

}
