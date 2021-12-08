import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { TravelsComponent } from './pages/travels/travels.component';

const routes: Routes = [
  { 
    path: '', 
    component: TravelsComponent 
  },
  {
    path:'travels',
    component:TravelsComponent
  },
  {
    path:'history',
    component:HistoryComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
