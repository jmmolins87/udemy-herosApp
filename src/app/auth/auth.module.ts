import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ** Custom **
// ** Modules **
import { AuthRoutingModule } from './auth-routing.module';
// ** components **
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
