import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  public hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(
    private _herosService: HerosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if ( !this.router.url.includes('edit') ) {
      return;
    }
    this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this._herosService.getHeroId( id ))
        )
        .subscribe( hero => this.hero = hero );
  }

  save() {
    if(this.hero.superhero.trim().length === 0) {
      return;
    }
    if ( this.hero.id ) {
      // Actualizar
      this._herosService.updateHero( this.hero )
          .subscribe( hero => console.log( 'Actualizando', hero ))
    } else {
      // Crear
      this._herosService.addHero( this.hero )
          .subscribe( hero => { this.router.navigate([ '/heros/edit', hero.id ])})
    }
  }

}
