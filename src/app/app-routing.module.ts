import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddUserComponent} from './authentication/add-user/add-user.component';
import {LoginComponent} from './authentication/login/login.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {AuthGuardService} from './service/authentication-service/auth-guard.service';
import {AuthenticatedUserResolver} from './service/resolvers/AuthenticatedUser.resolver';
import {HomeComponent} from './layout/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuardService]},
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuardService], resolve: {
      user: AuthenticatedUserResolver
    }
  },
  {path: 'register', component: AddUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuardService]},
  {path: 'workouts', loadChildren: './workouts/workout.module#WorkoutModule', canActivate: [AuthGuardService]},
  {path: 'results', loadChildren: './results/results.module#ResultsModule', canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
