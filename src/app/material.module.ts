import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule ,
    FormsModule
  ],
  exports:[
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule ,
    FormsModule,
    MatInputModule
  ]
})
export class MaterialModule { }
