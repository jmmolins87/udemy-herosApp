import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  public urlUsers: string = 'http://localhost:3000/usuarios';
  public urlHeros: string = 'http://localhost:3000/heroes';

  constructor( private http: HttpClient ) { }

  getHeros () {
    return this.http.get( this.urlHeros );
  }
}
