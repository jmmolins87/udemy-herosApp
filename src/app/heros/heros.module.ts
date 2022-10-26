import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ** Custom **
// ** Modules **
import { HerosRoutingModule } from './heros-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '../material/material.module';

// ** Components **
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HerosRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class HerosModule { }
