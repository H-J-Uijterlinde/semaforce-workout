import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WorkoutService} from '../../service/workout/workout.service';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {ScheduledExercise} from '../../model/workout/ScheduledExercise';
import {WeeklyResult} from '../../model/workout/WeeklyResult';
import {AddResultService} from '../../service/results/add-result.service';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {WorkoutView} from '../../model/workout/WorkoutView';

@Component({
  selector: 'app-show-current-workout',
  templateUrl: './show-current-workout.component.html',
  styleUrls: ['./show-current-workout.component.css']
})
export class ShowCurrentWorkoutComponent implements OnInit, OnDestroy {

  navigationSubscription;
  selectedDayNumber: number;
  @Input() workout: WorkoutView;

  trainingDay: TrainingDayView;
  exercises: ScheduledExercise[] = [];
  results: WeeklyResult[] = [];
  isFirstInit = true;

  currentWeek: number;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private workoutService: WorkoutService,
              private resultsService: AddResultService,
              private snackBar: MatSnackBar) {

    // subscribe to router events to 'refresh' component. Otherwise the component wil not react to url parameter changes
    this.navigationSubscription = this.router.events.subscribe(
      e => {
        if (e instanceof NavigationEnd) {
          this.selectedDayNumber = this.activeRoute.snapshot.params.dayNumber;

          // Subscribing to router events must happen in the constructor, however the @Input() properties are not yet
          // available here, therefore the first initialization of the trainingDay happens in the OnInit.
          if (!this.isFirstInit) {
            this.setTrainingDay();
          }
          this.isFirstInit = false;
        }
      }
    );
  }

  setTrainingDay() {
    this.workoutService.getTrainingDayByWorkoutId(this.workout.id, this.selectedDayNumber).subscribe(
      response => {
        this.resetTrainingDay(response);
      }
    );

  }

  private resetTrainingDay(response) {
    this.trainingDay = response;
    this.currentWeek = this.trainingDay.currentWeek;
    this.exercises = Object.values(this.trainingDay.scheduledExercises);
    this.exercises.forEach((exercise, index) => {
      exercise.results.weeklyResults[this.currentWeek] = (new WeeklyResult(index + 1, this.currentWeek, [], [], [], null));
    });
  }

  getSetNumbers(exercise: ScheduledExercise): number[] {
    const setNumbers: number[] = [];
    for (let i = 1; i <= exercise.configuration.numSets; i++) {
      setNumbers.push(i);
    }
    return setNumbers;
  }

  getWeekNumbers(multiplier: number): number[] {
    const weeknumber: number[] = [];
    for (let i = 1; i <= this.workout.numWeeks; i++) {
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

  ngOnInit() {
    this.setTrainingDay();
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
