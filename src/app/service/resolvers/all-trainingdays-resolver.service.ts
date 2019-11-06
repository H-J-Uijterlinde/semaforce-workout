import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {Observable} from 'rxjs';
import {AuthenticatedUserService} from '../authentication-service/authenticated-user.service';
import {WorkoutService} from '../workout/workout.service';

@Injectable({
  providedIn: 'root'
})
export class AllTrainingdaysResolverService implements Resolve<TrainingDayView[]> {

  constructor(private authenticatedUser: AuthenticatedUserService,
              private workoutService: WorkoutService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TrainingDayView[]> {
    console.log('trying to load trainingdays');

    if (this.authenticatedUser.user) {
      return this.workoutService.getAllTrainingDaysByWorkoutId(this.authenticatedUser.user.currentWorkout.id);
    } else {
      console.log('user not loaded yet');
      setTimeout(() => this.resolve(route, state), 500);
    }

  }
}
