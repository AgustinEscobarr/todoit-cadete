import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosignInGuard } from '../guards/nosign-in.guard';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent ,
    canActivate:[NosignInGuard],
  children:[
    {
   path:'',
   component:SignInComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
