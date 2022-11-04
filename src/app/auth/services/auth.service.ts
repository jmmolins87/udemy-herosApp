import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(
    private http: HttpClient
  ) { }

  verifyAutentication(): Observable<boolean> {
    if ( !localStorage.getItem('token')) {
      return of( false );
    }
    return this.http.get<Auth>( `${ this.apiUrl }/usuarios/1`)
              .pipe( 
                map( auth => {
                      this._auth = auth;
                      return true;
                }));
  }

  login() {
    return this.http.get<Auth>(`${ this.apiUrl }/usuarios/1`)
                    .pipe(
                      tap( auth => this._auth = auth ),
                      tap( auth => localStorage.setItem( 'id', auth.id )) 
                    );
  }
  
}
