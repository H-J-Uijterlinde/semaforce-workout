import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddUserComponent} from './authentication/add-user/add-user.component';
import {LoginComponent} from './authentication/login/login.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {AuthGuardService} from './service/authentication-service/auth-guard.service';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {HomeComponent} from './layout/home/home.component';
import {UserResolverService} from './service/resolvers/user-resolver.service';

const routes: Routes = [
  {path: 'register', component: AddUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
  {
    path: '', component: NavigationComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'admin', loadChildren: './layout/navigation/admin/admin.module#AdminModule'},
      {path: 'workouts', loadChildren: './layout/navigation/workouts/workout.module#WorkoutModule'},
      {path: 'results', loadChildren: './layout/navigation/results/results.module#ResultsModule'}
    ],
    canActivate: [AuthGuardService],
    resolve: [UserResolverService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
