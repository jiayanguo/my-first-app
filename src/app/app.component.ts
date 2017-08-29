import { Component } from '@angular/core';
import { Hero } from './class/hero'
import { HeroService } from './service/hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Tour of Heroes';

}
