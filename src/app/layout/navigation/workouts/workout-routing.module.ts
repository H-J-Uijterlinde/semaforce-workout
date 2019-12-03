import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkoutMenuComponent} from './workout-menu/workout-menu.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from '../../../service/authentication-service/auth-guard.service';
import {CreateWorkoutComponent} from './create-workout/create-workout.component';
import {CurrentWorkoutHomeComponent} from './current-workout/current-workout-home.component';
import {InstantWorkoutComponent} from './instant-workout/instant-workout.component';
import {AllTrainingDaysResolverService} from "../../../service/resolvers/all-training-days-resolver.service";


const routes: Routes = [
  {
    path: '', component: WorkoutMenuComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'create_workout', component: CreateWorkoutComponent},
      {
        path: 'current_workout', component: CurrentWorkoutHomeComponent,
        resolve: {
          trainingDays: AllTrainingDaysResolverService
        }
      },
      {path: 'instant_workout', component: InstantWorkoutComponent}
    ], canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule {
}
