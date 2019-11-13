import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectExerciseDialogComponent} from './select-exercise-dialog.component';
import {FilterExercisesModule} from '../filter-exercises/filter-exercises.module';
import {MaterialModule} from "../../material.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [SelectExerciseDialogComponent],
  imports: [
    CommonModule,
    FilterExercisesModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    SelectExerciseDialogComponent
  ]
})
export class SelectExerciseDialogModule { }
