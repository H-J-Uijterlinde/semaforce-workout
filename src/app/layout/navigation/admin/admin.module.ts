import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin-home/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import {MaterialModule} from '../../../material.module';
import {UserComponent} from './user/user.component';
import { OverviewComponent } from './muscle/overview/overview.component';
import { AddMuscleComponent } from './muscle/add-muscle/add-muscle.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExerciseComponent } from './exercise/exercise-overview/exercise.component';
import { AddExerciseComponent } from './exercise/add-exercise/add-exercise.component';
import {FilterExercisesModule} from "../../../modules/filter-exercises/filter-exercises.module";


@NgModule({
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    UserComponent,
    OverviewComponent,
    AddMuscleComponent,
    ExerciseComponent,
    AddExerciseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FilterExercisesModule
  ]
})
export class AdminModule { }
