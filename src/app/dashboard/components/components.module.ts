import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TripComponent } from './trip/trip.component';
import { MaterialModule } from 'src/app/material.module';
import { ButtonsCardComponent } from './buttons-card/buttons-card.component';
import { RouterModule } from '@angular/router';
import { CardExpansionComponent } from './dialogs/card-expansion/card-expansion.component';
import { AlertComponent } from './dialogs/alert/alert.component';





@NgModule({
  declarations: [HeaderComponent,MainComponent, TripComponent, ButtonsCardComponent, CardExpansionComponent, AlertComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[HeaderComponent,MainComponent, TripComponent]
})
export class ComponentsModule { }
