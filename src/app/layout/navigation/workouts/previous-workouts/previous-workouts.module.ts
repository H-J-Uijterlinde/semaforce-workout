import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviousWorkoutsRoutingModule } from './previous-workouts-routing.module';
import {PreviousInstantComponent} from './previous-instant/previous-instant.component';
import {PreviousCompleteComponent} from './previous-complete/previous-complete.component';
import {PreviousWorkoutsComponent} from './previous-workouts.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavigationComponent } from './navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {ShowCompletedWorkoutModule} from '../../../../modules/show-completed-workout/show-completed-workout.module';


@NgModule({
  declarations: [PreviousInstantComponent, PreviousCompleteComponent, PreviousWorkoutsComponent, NavigationComponent],
  imports: [
    CommonModule,
    PreviousWorkoutsRoutingModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class PreviousWorkoutsModule { }
