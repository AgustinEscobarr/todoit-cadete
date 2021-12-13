import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { TravelsComponent } from './pages/travels/travels.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent ,
    canActivate: [AuthGuard],
    children:[
      {
        path:'travels',
        component:TravelsComponent
      },
      {
        path:'history',
        component:HistoryComponent
      },
      {
        path:'',
        component:TravelsComponent
      }
  ]
  }
  ,
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
