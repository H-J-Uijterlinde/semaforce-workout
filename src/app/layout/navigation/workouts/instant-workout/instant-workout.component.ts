import { Component, OnInit } from '@angular/core';
import {TrainingDayView} from '../../../../model/workout/TrainingDayView';
import {ScheduledExercise} from '../../../../model/workout/ScheduledExercise';
import {WeeklyResult} from '../../../../model/results/WeeklyResult';
import {AuthenticatedUserService} from '../../../../service/authentication-service/authenticated-user.service';
import {InstantTrainingWrapper} from '../../../../model/workout/InstantTrainingWrapper';
import {TrainingDay} from '../../../../model/workout/TrainingDay';
import {ResultService} from '../../../../service/results/result.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-instant-workout',
  templateUrl: './instant-workout.component.html',
  styleUrls: ['./instant-workout.component.css']
})
export class InstantWorkoutComponent implements OnInit {

  trainingDay: TrainingDayView;

  constructor(private authenticatedUser: AuthenticatedUserService,
              private resultService: ResultService,
              private router: Router,
              private snackBar: MatSnackBar) {

    this.trainingDay = new TrainingDayView(null, 1, 1, new Map<string, ScheduledExercise>());
  }

  ngOnInit() {
  }

  addInstantTrainingResults(results: WeeklyResult[], exercises: ScheduledExercise[]) {
    exercises.forEach( exercise => exercise.results = null);
    const wrapperDto = new InstantTrainingWrapper(this.authenticatedUser.user.id,
      new TrainingDay(this.authenticatedUser.user, 1, exercises), results);

    this.resultService.addInstantTrainingResults(wrapperDto).subscribe(
      succes => {
        this.router.navigateByUrl('/home');
        this.snackBar.open('Results saved!', null, {duration: 3000});
      }
    );
  }

}
