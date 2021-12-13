import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../material.module';
import { AuthPagesModule } from './pages/auth-pages.module';
import { SignInAlertComponent } from './components/dialogs/sign-in-alert/sign-in-alert.component';



@NgModule({
  declarations: [
    AuthComponent,
    SignInAlertComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    AuthPagesModule
  ]
})
export class AuthModule { }
