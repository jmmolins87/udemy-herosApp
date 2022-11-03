import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ 
    `
      .container {
        margin: 25px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  get auth() {
    return this._authService.auth;
  }

  constructor(
    private router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigate(['/auth'])
  }

}
