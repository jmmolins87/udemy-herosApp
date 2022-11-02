import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from '../../services/heros.service';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  public hero!: Hero;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _herosService: HerosService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe( switchMap(({ id }) => this._herosService.getHeroId( id )))
    .subscribe( hero => this.hero = hero );
  }

  comeBack() {
    this.router.navigate(['/heros/list']);
  }  

}
