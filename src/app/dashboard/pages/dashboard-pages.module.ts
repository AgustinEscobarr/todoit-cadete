import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';

import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [HistoryComponent, HomeComponent, TravelsComponent, ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ComponentsModule
  ],
  exports:[HistoryComponent, HomeComponent, TravelsComponent,ComponentsModule]
})
export class DashboardPagesModule { }
