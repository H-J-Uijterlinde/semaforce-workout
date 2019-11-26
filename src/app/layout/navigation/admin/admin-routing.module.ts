import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AuthGuardService} from '../../../service/authentication-service/auth-guard.service';
import {AdminComponent} from './admin-home/admin.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {OverviewComponent} from './muscle/overview/overview.component';
import {AddMuscleComponent} from './muscle/add-muscle/add-muscle.component';
import {ExerciseComponent} from './exercise/exercise-overview/exercise.component';
import {AddExerciseComponent} from './exercise/add-exercise/add-exercise.component';


const routes: Routes = [
  {path: '', component: AdminMenuComponent, children: [
      {path: 'users', component: UserComponent, canActivate: [AuthGuardService]},
      {path: 'home', component: AdminComponent, canActivate: [AuthGuardService]},
      {path: 'muscle', component: OverviewComponent, canActivate: [AuthGuardService]},
      {path: 'add-muscle', component: AddMuscleComponent, canActivate: [AuthGuardService]},
      {path: 'add-muscle/:id', component: AddMuscleComponent, canActivate: [AuthGuardService]},
      {path: 'exercise', component: ExerciseComponent, canActivate: [AuthGuardService]},
      {path: 'add-exercise', component: AddExerciseComponent, canActivate: [AuthGuardService]},
      {path: 'add-exercise/:id', component: AddExerciseComponent, canActivate: [AuthGuardService]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
