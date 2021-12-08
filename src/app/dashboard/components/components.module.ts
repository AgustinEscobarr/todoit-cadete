import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TripComponent } from './trip/trip.component';
import { MaterialModule } from 'src/app/material.module';




@NgModule({
  declarations: [HeaderComponent,MainComponent, TripComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[HeaderComponent,MainComponent, TripComponent]
})
export class ComponentsModule { }
