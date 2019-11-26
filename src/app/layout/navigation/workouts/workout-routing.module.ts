import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkoutMenuComponent} from './workout-menu/workout-menu.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from '../../../service/authentication-service/auth-guard.service';
import {CreateWorkoutComponent} from './create-workout/create-workout.component';
import {CurrentWorkoutHomeComponent} from './current-workout/current-workout-home.component';


const routes: Routes = [
  {
    path: '', component: WorkoutMenuComponent, children: [
      {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
      {path: 'create_workout', component: CreateWorkoutComponent, canActivate: [AuthGuardService]},
      {
        path: 'current_workout/:dayNumber', component: CurrentWorkoutHomeComponent , canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule {
}
