import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardPagesModule } from './pages/dashboard-pages.module';

import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardPagesModule,
    MaterialModule
  ],
  exports:[
    DashboardPagesModule
  ]
})
export class DashboardModule { }
