import {Component, OnInit} from '@angular/core';
import {AuthenticatedUserService} from '../../../../service/authentication-service/authenticated-user.service';
import {WorkoutView} from '../../../../model/workout/WorkoutView';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TrainingDayView} from '../../../../model/workout/TrainingDayView';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultService} from '../../../../service/results/result.service';
import {WeeklyResult} from '../../../../model/results/WeeklyResult';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-current-workout-home',
  templateUrl: './current-workout-home.component.html',
  styleUrls: ['./current-workout-home.component.css']
})
export class CurrentWorkoutHomeComponent implements OnInit {

  workoutForView: WorkoutView;
  allTrainingDays: TrainingDayView[];
  isWeb$: Observable<boolean>;
  showCondensed = false;

  constructor(private authenticatedUser: AuthenticatedUserService,
              private breakPointObserver: BreakpointObserver,
              private activatedRoute: ActivatedRoute,
              private resultsService: ResultService,
              private snackBar: MatSnackBar,
              private router: Router) {

    this.workoutForView = authenticatedUser.user.currentWorkout;

    this.isWeb$ = this.breakPointObserver.observe(Breakpoints.Web)
      .pipe(
        map(result => result.matches)
      );

    this.activatedRoute.data.subscribe(
      data => {
        this.allTrainingDays = data.trainingDays;
      }
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

  AddResults(trainingDayId: bigint, results: WeeklyResult[]) {
    this.resultsService.addResult(trainingDayId, results).subscribe(
      response => {
        this.router.navigateByUrl('/home');
        this.snackBar.open('Results saved!', null, {duration: 3000});
      }
    );
  }
}
