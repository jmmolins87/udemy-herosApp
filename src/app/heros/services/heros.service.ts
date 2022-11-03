import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  public apiUrl: string = environment.apiUrl;
  public urlUsers: string = '/usuarios/';
  public urlHeros: string = '/heroes/';

  constructor( private http: HttpClient ) { }

  getHeros (): Observable<Hero[]> {
    return this.http.get<Hero[]>( this.apiUrl + this.urlHeros );
  }

  getHeroId( id: string ): Observable<Hero> {
    return this.http.get<Hero>( this.apiUrl + this.urlHeros + id );
  }

  getSuggestions( term: string ): Observable<Hero[]>{
    return this.http.get<Hero[]>( `${ this.apiUrl }${ this.urlHeros }?q=${ term }&_limit=6` );
  }

  addHero( hero: Hero ): Observable<Hero> {
    return this.http.post<Hero>( `${ this.apiUrl }${ this.urlHeros }`, hero );
  }

  updateHero( hero: Hero ): Observable<Hero> {
    return this.http.put<Hero>( `${ this.apiUrl }${ this.urlHeros }${ hero.id }`, hero );
  }

  deleteHero( id: string ): Observable<{}> {
    return this.http.delete<any>( `${ this.apiUrl }${ this.urlHeros }${ id }` );
  }
}
