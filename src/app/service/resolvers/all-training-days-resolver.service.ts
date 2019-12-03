import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {Observable} from 'rxjs';
import {AuthenticatedUserService} from '../authentication-service/authenticated-user.service';
import {WorkoutService} from '../workout/workout.service';

@Injectable({
  providedIn: 'root'
})
export class AllTrainingDaysResolverService implements Resolve<TrainingDayView[]> {

  constructor(private authenticatedUser: AuthenticatedUserService,
              private workoutService: WorkoutService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TrainingDayView[]> | Promise<TrainingDayView[]> | TrainingDayView[] {
    return this.workoutService.getAllTrainingDaysByWorkoutId(this.authenticatedUser.user.currentWorkout.id);
  }
}
