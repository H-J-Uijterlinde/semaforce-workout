import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTotalWorkoutsGoalComponent } from './add-total-workouts-goal/add-total-workouts-goal.component';
import { AddExerciseGoalComponent } from './add-exercise-goal/add-exercise-goal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {SelectExerciseDialogModule} from '../select-exercise-dialog/select-exercise-dialog.module';
import { ExerciseGoalConfirmationDialogComponent } from './exercise-goal-confirmation-dialog/exercise-goal-confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [AddTotalWorkoutsGoalComponent, AddExerciseGoalComponent, ExerciseGoalConfirmationDialogComponent],
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
    SelectExerciseDialogModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  entryComponents: [
    ExerciseGoalConfirmationDialogComponent
  ]
})
export class AddGoalsModule { }
