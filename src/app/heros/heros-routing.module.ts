import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ** Components **
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: ':/id',
        component: HeroComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class HerosRoutingModule { }
