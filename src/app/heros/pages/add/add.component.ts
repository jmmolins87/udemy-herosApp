import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { 
  MatSnackBar, 
  MatSnackBarHorizontalPosition, 
  MatSnackBarVerticalPosition 
} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
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

  /**
   * @title Snack-bar with configurable position
  */
  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _herosService: HerosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if ( !this.router.url.includes('edit') ) {
      return;
    }
    this.activatedRoute.params
        .pipe( switchMap(({ id }) => this._herosService.getHeroId( id )))
        .subscribe( hero => this.hero = hero );
  }

  save() {
    if(this.hero.superhero.trim().length === 0) {
      return;
    }
    if ( this.hero.id ) {
      // Actualizar
      this._herosService.updateHero( this.hero )
          .subscribe( hero => this.showSnackBar( 'Registro actualizado' ));
    } else {
      // Crear
      this._herosService.addHero( this.hero )
          .subscribe( hero => { 
            this.router.navigate([ '/heros/edit', hero.id ])
            this.showSnackBar( 'Registro creado' );
          })
    }
  }

  remove() {
    const dialog = this.dialog.open( ConfirmComponent, {
      width: '300px',
      data: this.hero
    });
    dialog.afterClosed().subscribe(( result ) => {
      if (result) {
        this._herosService.deleteHero( this.hero.id! )
            .subscribe( resp => { 
              this.router.navigate([ '/heros' ])});
      }
    })
  }

  showSnackBar( message: string ) {
    this.snackBar.open( message, 'Ok!!', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    } )
  }

}
