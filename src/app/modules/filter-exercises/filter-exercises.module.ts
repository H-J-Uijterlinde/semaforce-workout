import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterExercisesComponent } from './filter-exercises.component';
import {MaterialModule} from '../../material.module';
import {FormsModule} from '@angular/forms';
import {SelectMuscleDialogModule} from '../select-muscle-dialog/select-muscle-dialog.module';



@NgModule({
  declarations: [FilterExercisesComponent],
  exports: [
    FilterExercisesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SelectMuscleDialogModule
  ]
})
export class FilterExercisesModule { }
