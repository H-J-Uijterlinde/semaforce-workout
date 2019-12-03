import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {WorkoutService} from '../../service/workout/workout.service';
import {ScheduledExercise} from '../../model/workout/ScheduledExercise';
import {WeeklyResult} from '../../model/workout/WeeklyResult';
import {NgForm} from '@angular/forms';
import {ResultService} from '../../service/results/result.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthenticatedUserService} from '../../service/authentication-service/authenticated-user.service';
import {ExerciseConfiguration} from '../../model/workout/ExerciseConfiguration';
import {SelectExerciseDialogComponent} from '../select-exercise-dialog/select-exercise-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Result} from '../../model/workout/Result';
import {MatExpansionPanel} from '@angular/material/expansion';

@Component({
  selector: 'app-show-workout-condensed',
  templateUrl: './show-workout-condensed.component.html',
  styleUrls: ['./show-workout-condensed.component.css']
})
export class ShowWorkoutCondensedComponent implements OnInit {

  @Input()
  allTrainingDays: TrainingDayView[];

  @Output()
  addResultsEvent = new EventEmitter<[bigint, WeeklyResult[], ScheduledExercise[]]>();

  dayNumbers: number[] = [];
  weekNumbers: number[] = [];

  trainingDay: TrainingDayView;
  currentWeek: number;
  exercises: ScheduledExercise[] = [];
  results: WeeklyResult[] = [];
  setsPerExercise: Map<ScheduledExercise, number> = new Map<ScheduledExercise, number>();

  newExercise: ScheduledExercise = new ScheduledExercise(null,
    new ExerciseConfiguration(null, null, null, null), null);

  constructor(private workoutService: WorkoutService,
              private resultsService: ResultService,
              private snackBar: MatSnackBar,
              private authenticatedUser: AuthenticatedUserService,
              private dialog: MatDialog) {


  }

  ngOnInit() {
    this.populateNumberArray(this.allTrainingDays.length, this.dayNumbers);
    this.setTrainingDay(1);
  }

  populateNumberArray(maxNumber: number, numberArrayToPopulate: number[]) {
    for (let i = 1; i <= maxNumber; i++) {
      numberArrayToPopulate.push(i);
    }
  }

  setTrainingDay(dayNumber: number) {
    this.weekNumbers = [];
    this.handleTrainingDayResponse(this.allTrainingDays[dayNumber - 1]);
  }

  private handleTrainingDayResponse(trainingDay: TrainingDayView) {
    this.trainingDay = trainingDay;
    this.currentWeek = this.trainingDay.currentWeek;
    this.populateNumberArray(this.currentWeek, this.weekNumbers);
    this.exercises = Object.values(this.trainingDay.scheduledExercises);

    this.exercises.forEach((exercise, index) => {
      exercise.results.weeklyResults[this.currentWeek] = (new WeeklyResult(index + 1, this.currentWeek,
        [], [], [], null, exercise.exercise.id));

      this.setsPerExercise.set(exercise, exercise.configuration.numSets);
    });
  }

  getWeekNumbers(multiplier: number): number[] {
    const weeknumber: number[] = [];
    for (let i = 1; i <= this.currentWeek; i++) {
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

      this.addResultsEvent.emit([this.trainingDay.id, this.results, this.exercises]);

    } else {
      this.snackBar.open('You did not fill in all the fields.', null, {duration: 3000});
    }

  }

  cancelSet(scheduledExercise: ScheduledExercise, setNumber: number) {
    const weeklyResult: WeeklyResult = scheduledExercise.results.weeklyResults[this.currentWeek];

    const currentNumSetsForExercise = this.setsPerExercise.get(scheduledExercise);
    this.setsPerExercise.set(scheduledExercise, currentNumSetsForExercise - 1);

    if (weeklyResult.repetitionsPerformed[setNumber - 1] !== null ||
      weeklyResult.rpe[setNumber - 1] !== null ||
      weeklyResult.weightsLifted[setNumber - 1] !== null) {

      weeklyResult.repetitionsPerformed.splice(setNumber - 1, 1);
      weeklyResult.rpe.splice(setNumber - 1, 1);
      weeklyResult.weightsLifted.splice(setNumber - 1, 1);
    }
  }

  openSelectExerciseDialog() {
    const dialogRef = this.dialog.open(SelectExerciseDialogComponent, {
      data: {
        selectedExercise: [],
        multi: false
      },
      height: '90%',
      width: 'fit-content',
      maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(
      response => {
        if (response) {
          this.newExercise.exercise = response[0];
        }
      }
    );
  }

  addExercise(addExerciseForm: NgForm, panel: MatExpansionPanel) {

    if (addExerciseForm.valid) {

      this.newExercise.results = new Result(this.authenticatedUser.user,
        this.newExercise.exercise, []);

      this.newExercise.results.weeklyResults[this.currentWeek] = new WeeklyResult(this.exercises.length + 1, this.currentWeek,
        [], [], [], [], this.newExercise.exercise.id);

      this.exercises.push(this.newExercise);
      this.setsPerExercise.set(this.newExercise, this.newExercise.configuration.numSets);

      this.newExercise = new ScheduledExercise(null,
        new ExerciseConfiguration(null, null, null, null), null);
      panel.close();

    } else {
      this.snackBar.open('You did not fill in all the fields.', null, {duration: 3000});
    }
  }
}
