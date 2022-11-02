import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public term: string = '';
  heros: Hero[] = [];

  constructor( private _herosService: HerosService ) { }

  ngOnInit(): void {
  }

  searching() {
    this._herosService.getHeros()
        .subscribe( heros => this.heros = heros );
  }

}
