import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styles: [
  ]
})
export class CardHeroComponent implements OnInit {

  @Input() hero!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
