import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowWorkoutCondensedComponent } from './show-workout-condensed.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SelectExerciseDialogModule} from "../select-exercise-dialog/select-exercise-dialog.module";



@NgModule({
  declarations: [ShowWorkoutCondensedComponent],
  exports: [
    ShowWorkoutCondensedComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    SelectExerciseDialogModule
  ]
})
export class ShowWorkoutCondensedModule { }
