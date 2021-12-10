import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from 'src/app/material.module';




@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AuthPagesModule { }
