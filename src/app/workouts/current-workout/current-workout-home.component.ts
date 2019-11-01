import {Component} from '@angular/core';
import {AuthenticatedUserService} from '../../service/authentication-service/authenticated-user.service';
import {WorkoutView} from '../../model/workout/WorkoutView';

@Component({
  selector: 'app-current-workout-home',
  template: `<app-show-current-workout [workout]="workout"></app-show-current-workout>`
})
export class CurrentWorkoutHomeComponent {

  workout: WorkoutView;

  constructor(private authenticatedUser: AuthenticatedUserService) {
    this.workout = authenticatedUser.user.currentWorkout;
  }
}
