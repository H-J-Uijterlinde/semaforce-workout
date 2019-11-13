import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTotalWorkoutsGoalComponent } from './add-total-workouts-goal/add-total-workouts-goal.component';
import { AddExerciseGoalComponent } from './add-exercise-goal/add-exercise-goal.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {SelectExerciseDialogModule} from "../select-exercise-dialog/select-exercise-dialog.module";



@NgModule({
  declarations: [AddTotalWorkoutsGoalComponent, AddExerciseGoalComponent],
  exports: [
    AddTotalWorkoutsGoalComponent,
    AddExerciseGoalComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    SelectExerciseDialogModule
  ]
})
export class AddGoalsModule { }
