import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkoutRoutingModule} from './workout-routing.module';
import {WorkoutMenuComponent} from './workout-menu/workout-menu.component';
import {MaterialModule} from '../../../material.module';
import {HomeComponent} from './home/home.component';
import {CreateWorkoutComponent} from './create-workout/create-workout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {SelectMuscleDialogModule} from '../../../modules/select-muscle-dialog/select-muscle-dialog.module';
import {ShowWorkoutModule} from '../../../modules/show-workout/show-workout.module';
import {SelectExerciseDialogModule} from '../../../modules/select-exercise-dialog/select-exercise-dialog.module';
import {CurrentWorkoutHomeComponent} from './current-workout/current-workout-home.component';
import {ShowWorkoutCondensedModule} from '../../../modules/show-workout-condensed/show-workout-condensed.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InstantWorkoutComponent } from './instant-workout/instant-workout.component';
import {ShowCompletedWorkoutModule} from '../../../modules/show-completed-workout/show-completed-workout.module';



@NgModule({
  declarations: [WorkoutMenuComponent, HomeComponent, CreateWorkoutComponent,
    CurrentWorkoutHomeComponent,
    InstantWorkoutComponent],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatTabsModule,
    SelectMuscleDialogModule,
    ShowWorkoutModule,
    SelectExerciseDialogModule,
    ShowWorkoutCondensedModule,
    MatCheckboxModule,
    ShowCompletedWorkoutModule
  ]})
export class WorkoutModule {
}
