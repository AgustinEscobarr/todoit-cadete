import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NosignInGuard } from './guards/nosign-in.guard';


const routes: Routes = [
{ path: 'auth', 

  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
}, 
{ 
  path: 'dashboard', 
  
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
},
{
  path: '', 
  
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
