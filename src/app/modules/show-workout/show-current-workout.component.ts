import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WorkoutService} from '../../service/workout/workout.service';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {ScheduledExercise} from '../../model/workout/ScheduledExercise';
import {WeeklyResult} from '../../model/results/WeeklyResult';
import {ResultService} from '../../service/results/result.service';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {WorkoutView} from '../../model/workout/WorkoutView';

@Component({
  selector: 'app-show-current-workout',
  templateUrl: './show-current-workout.component.html',
  styleUrls: ['./show-current-workout.component.css']
})
export class ShowCurrentWorkoutComponent implements OnInit {

  @Input()
  allTrainingDays: TrainingDayView[];

  trainingDay: TrainingDayView;
  exercises: ScheduledExercise[] = [];
  results: WeeklyResult[] = [];
  isFirstInit = true;

  currentWeek: number;

  constructor(private activeRoute: ActivatedRoute,
              public router: Router,
              private workoutService: WorkoutService,
              private resultsService: ResultService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setTrainingDay(1);
  }

  setTrainingDay(dayNumber: number) {
    this.resetTrainingDay(this.allTrainingDays[dayNumber - 1]);
  }

  private resetTrainingDay(response: TrainingDayView) {
    this.trainingDay = response;
    this.currentWeek = this.trainingDay.currentWeek;
    this.exercises = Object.values(this.trainingDay.scheduledExercises);
    this.exercises.forEach((exercise, index) => {
      exercise.results.weeklyResults[this.currentWeek] = (new WeeklyResult(index + 1, this.currentWeek, [], [], [], null, exercise.exercise.id));
    });
  }

  getSetNumbers(exercise: ScheduledExercise): number[] {
    const setNumbers: number[] = [];
    for (let i = 1; i <= exercise.configuration.numSets; i++) {
      setNumbers.push(i);
    }
    return setNumbers;
  }

  getDayNumbers() {
    const dayNumbers: number[] = [];
    for (let i = 1; i <= this.allTrainingDays.length; i++) {
      dayNumbers.push(i);
    }
    return dayNumbers;
  }

  getWeekNumbers(multiplier: number): number[] {
    const weeknumber: number[] = [];
    for (let i = 1; i <= this.trainingDay.currentWeek; i++) {
      for (let j = 1; j <= multiplier; j++) {
        weeknumber.push(j);
      }
    }
    return weeknumber;
  }

  getTableHeader(tableHeaderNumber: number): string {
    switch (tableHeaderNumber) {
      case 1:
        return 'Rpe';
      case 2:
        return 'Weight';
      case 3:
        return 'Reps';
    }
  }

  determineIfColumnsBelongToCurrentWeek(index: number) {
    return index / 3 + 1 === this.currentWeek ||
      (index + 2) / 3 === this.currentWeek ||
      (index + 1) / 3 === this.currentWeek;
  }

  determineIfColumnsBelongToPreviousWeek(index: number) {
    return index / 3 + 1 < this.currentWeek;
  }

  saveResults(form: NgForm) {

    if (form.valid) {

      this.exercises.forEach(
        exercise => {
          this.results.push(exercise.results.weeklyResults[this.currentWeek]);
        }
      );

      this.resultsService.addResult(this.trainingDay.id, this.results).subscribe(
        response => {
          this.resetTrainingDay(response);
          this.snackBar.open('Results saved!', null, {duration: 3000});
        }
      );

    } else {
      this.snackBar.open('You did not fill in all the fields.', null, {duration: 3000});
    }
  }
}
