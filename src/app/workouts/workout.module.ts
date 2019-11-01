import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkoutRoutingModule} from './workout-routing.module';
import {WorkoutMenuComponent} from './workout-menu/workout-menu.component';
import {MaterialModule} from '../material.module';
import {HomeComponent} from './home/home.component';
import {CreateWorkoutComponent} from './create-workout/create-workout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {SelectExerciseDialogComponent} from './create-workout/select-exercise-dialog/select-exercise-dialog.component';
import {AuthenticatedUserResolver} from '../service/resolvers/AuthenticatedUser.resolver';
import {SelectMuscleDialogModule} from '../modules/select-muscle-dialog/select-muscle-dialog.module';
import {FilterExercisesModule} from '../modules/filter-exercises/filter-exercises.module';
import {CurrentWorkoutHomeComponent} from './current-workout/current-workout-home.component';
import {ShowWorkoutModule} from '../modules/show-workout/show-workout.module';


@NgModule({
  declarations: [WorkoutMenuComponent, HomeComponent, CreateWorkoutComponent, SelectExerciseDialogComponent,
    CurrentWorkoutHomeComponent],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatTabsModule,
    SelectMuscleDialogModule,
    FilterExercisesModule,
    ShowWorkoutModule
  ],
  entryComponents: [
    SelectExerciseDialogComponent
  ],
  providers: [AuthenticatedUserResolver]
})
export class WorkoutModule {
}
