import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  public heros: Hero[] = [];

  constructor(
    private _herosService: HerosService
  ) { }

  ngOnInit(): void {
    this._herosService.getHeros().subscribe( heros => this.heros = heros );
  }

}
