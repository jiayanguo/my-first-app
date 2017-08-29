import { Component, OnInit } from '@angular/core';

import {Hero} from '../../class/hero'
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {

  constructor(private heroeService: HeroService) { }

  ngOnInit() {
    this.heroeService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5))
  }

  heroes: Hero[];


}
