import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import{MatDividerModule} from '@angular/material/divider'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule ,
    FormsModule,
    MatDividerModule
    
  ],
  exports:[
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule ,
    FormsModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
