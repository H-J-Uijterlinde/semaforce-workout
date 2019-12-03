import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowCurrentWorkoutComponent} from './show-current-workout.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [ShowCurrentWorkoutComponent],
  exports: [
    ShowCurrentWorkoutComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class ShowWorkoutModule { }
