import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkoutMenuComponent} from './workout-menu/workout-menu.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from '../service/authentication-service/auth-guard.service';
import {CreateWorkoutComponent} from "./create-workout/create-workout.component";
import {AuthenticatedUserResolver} from "../service/resolvers/AuthenticatedUser.resolver";
import {CurrentWorkoutHomeComponent} from "./current-workout/current-workout-home.component";


const routes: Routes = [
  {
    path: '', component: WorkoutMenuComponent, children: [
      {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
      {path: 'create_workout', component: CreateWorkoutComponent, canActivate: [AuthGuardService]},
      {
        path: 'current_workout/:dayNumber', component: CurrentWorkoutHomeComponent , canActivate: [AuthGuardService]
      }
      // todo: Create placeholder content: https://angular.io/guide/router#displaying-multiple-routes-in-named-outlets
    ], resolve: {workout: AuthenticatedUserResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule {
}
