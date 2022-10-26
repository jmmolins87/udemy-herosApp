import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  constructor(
    private _herosService: HerosService
  ) { }

  ngOnInit(): void {
    this._herosService.getHeros()
        .subscribe( resp => { console.log( resp )});
  }

}
