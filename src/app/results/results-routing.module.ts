import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from '../service/authentication-service/auth-guard.service';
import {AddGoalsComponent} from './add-goals/add-goals.component';
import {AuthenticatedUserResolver} from '../service/resolvers/AuthenticatedUser.resolver';
import {ProgressionComponent} from './progression/progression.component';
import {GoalsComponent} from './goals/goals.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuardService], resolve: [AuthenticatedUserResolver]},
  {path: 'add_goals', component: AddGoalsComponent, canActivate: [AuthGuardService], resolve: [AuthenticatedUserResolver]},
  {path: 'progression', component: ProgressionComponent, canActivate: [AuthGuardService], resolve: [AuthenticatedUserResolver]},
  {path: 'goals', component: GoalsComponent, canActivate: [AuthGuardService], resolve: [AuthenticatedUserResolver]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
