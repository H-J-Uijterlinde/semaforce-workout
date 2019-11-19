import {Component, OnInit} from '@angular/core';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {WorkoutView} from '../../model/workout/WorkoutView';
import {AuthenticatedUserService} from '../../service/authentication-service/authenticated-user.service';
import {WorkoutService} from '../../service/workout/workout.service';
import {ScheduledExercise} from '../../model/workout/ScheduledExercise';
import {WeeklyResult} from '../../model/workout/WeeklyResult';
import {NgForm} from '@angular/forms';
import {ResultService} from '../../service/results/result.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-workout-condensed',
  templateUrl: './show-workout-condensed.component.html',
  styleUrls: ['./show-workout-condensed.component.css']
})
export class ShowWorkoutCondensedComponent implements OnInit {

  currentWorkout: WorkoutView;
  dayNumbers: number[] = [];
  weekNumbers: number[] = [];
  allTrainingDays: TrainingDayView[];
  trainingDay: TrainingDayView;
  currentWeek: number;
  exercises: ScheduledExercise[] = [];
  results: WeeklyResult[] = [];

  constructor(private authenticatedUser: AuthenticatedUserService,
              private workoutService: WorkoutService,
              private resultsService: ResultService,
              private snackBar: MatSnackBar) {
    this.currentWorkout = authenticatedUser.user.currentWorkout;
  }

  ngOnInit() {
    if (this.currentWorkout) {
      this.populateNumberArray(this.currentWorkout.daysPerWeek, this.dayNumbers);
      this.populateNumberArray(this.currentWorkout.numWeeks, this.weekNumbers);
      this.getTrainingDays();
    }
  }

  private getTrainingDays() {
    this.workoutService.getAllTrainingDaysByWorkoutId(this.currentWorkout.id).subscribe(
      response => {
        this.allTrainingDays = response;
        this.setTrainingDay(1);
      }
    );
  }

  populateNumberArray(maxNumber: number, numberArrayToPopulate: number[]) {
    for (let i = 1; i <= maxNumber; i++) {
      numberArrayToPopulate.push(i);
    }
  }

  setTrainingDay(dayNumber: number) {
    this.handleTrainingDayResponse(this.allTrainingDays[dayNumber - 1]);
  }

  private handleTrainingDayResponse(trainingDay: TrainingDayView) {
    this.trainingDay = trainingDay;
    this.currentWeek = this.trainingDay.currentWeek;
    this.exercises = Object.values(this.trainingDay.scheduledExercises);
    this.exercises.forEach((exercise, index) => {
      exercise.results.weeklyResults[this.currentWeek] = (new WeeklyResult(index + 1, this.currentWeek, [], [], [], null));
    });
  }

  getWeekNumbers(multiplier: number): number[] {
    const weeknumber: number[] = [];
    for (let i = 1; i <= this.currentWorkout.numWeeks; i++) {
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

  getSetNumbers(exercise: ScheduledExercise): number[] {
    const setNumbers: number[] = [];
    for (let i = 1; i <= exercise.configuration.numSets; i++) {
      setNumbers.push(i);
    }
    return setNumbers;
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
          this.handleTrainingDayResponse(response);
          this.snackBar.open('Results saved!', null, {duration: 3000});
        }
      );

    } else {
      this.snackBar.open('You did not fill in all the fields.', null, {duration: 3000});
    }

  }
}
