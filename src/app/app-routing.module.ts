import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

// ** Components **
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import ( './auth/auth.module' ).then( m => m.AuthModule )
  },
  {
    path: 'heros',
    loadChildren: () => import ( './heros/heros.module' ).then( m => m.HerosModule ),
    // canLoad: [ AuthGuard ],
    // canActivate: [ AuthGuard ],
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
