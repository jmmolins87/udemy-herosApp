import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  public heros: Hero[] = [];
  public selectedHero: Hero | undefined;

  constructor( private _herosService: HerosService ) { }

  ngOnInit(): void {
  }

  searching() {
    this._herosService.getSuggestions( this.term.trim() )
        .subscribe( heros => this.heros = heros );
  }

  optionSelected( e: MatAutocompleteSelectedEvent ) {
    if(!e.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = e.option.value;
    this.term = hero.superhero;
    this._herosService.getHeroId( hero.id! )
        .subscribe( hero => this.selectedHero = hero );
  }

}
