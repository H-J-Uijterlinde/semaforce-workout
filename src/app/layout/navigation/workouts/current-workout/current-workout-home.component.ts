import {Component, OnInit} from '@angular/core';
import {AuthenticatedUserService} from '../../../../service/authentication-service/authenticated-user.service';
import {WorkoutView} from '../../../../model/workout/WorkoutView';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-current-workout-home',
  templateUrl: './current-workout-home.component.html',
  styleUrls: ['./current-workout-home.component.css']
})
export class CurrentWorkoutHomeComponent implements OnInit {

  workout: WorkoutView;
  isWeb$: Observable<boolean>;
  showCondensed = false;

  constructor(private authenticatedUser: AuthenticatedUserService,
              private breakPointObserver: BreakpointObserver) {
    this.workout = authenticatedUser.user.currentWorkout;

    this.isWeb$ = this.breakPointObserver.observe(Breakpoints.Web)
      .pipe(
        map(result => result.matches)
      );
  }

  ngOnInit() {
    this.isWeb$.subscribe(
      result => {
        if (!result) {
          this.showCondensed = true;
        }
      }
    );
  }

}
