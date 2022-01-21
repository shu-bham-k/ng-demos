import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService:MessageService) {
    
   }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;

  heroes: Hero[] = [];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HerosComponent:Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
     this.heroService.getHeroes()
         .subscribe(heroes => this.heroes = heroes)
  }



 

}

