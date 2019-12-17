import {Component, OnInit} from '@angular/core';
import {Workout} from '../../../../model/workout/Workout';
import {AuthenticatedUserService} from '../../../../service/authentication-service/authenticated-user.service';
import {WorkoutService} from '../../../../service/workout/workout.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgForm} from '@angular/forms';
import {TrainingDay} from '../../../../model/workout/TrainingDay';
import {ScheduledExercise} from '../../../../model/workout/ScheduledExercise';
import {ExerciseConfiguration} from '../../../../model/workout/ExerciseConfiguration';
import {MatDialog} from '@angular/material/dialog';
import {SelectExerciseDialogComponent} from '../../../../modules/select-exercise-dialog/select-exercise-dialog.component';
import {Router} from '@angular/router';
import {MatStepper} from '@angular/material/stepper';
import {DisplaySpinnerService} from '../../../../service/navigation/display-spinner.service';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {

  workout: Workout = new Workout(null, null, '', null, null, []);
  numWeeks: number[] = [];
  daysPerWeek: number[] = [];
  dayNumbers: number[] = [];
  exerciseNumbersPerDay: number[][] = [];

  // todo: delete below temporary fix, enable changing the configuration
  configurationDisabled = false;

  constructor(private authenticatedUser: AuthenticatedUserService,
              private workoutService: WorkoutService,
              private snackbar: MatSnackBar,
              public dialog: MatDialog,
              private router: Router,
              private spinnerService: DisplaySpinnerService) {
  }

  ngOnInit() {
    this.populateArrays(12, this.numWeeks);
    this.populateArrays(7, this.daysPerWeek);
  }

  populateArrays(maxNumber: number, array: number[]) {

    for (let i = 1; i <= maxNumber; i++) {
      array[i - 1] = i;
    }
  }

  populateExerciseNumbersPerDay() {
    for (let i = 1; i <= this.workout.daysPerWeek; i++) {
      this.exerciseNumbersPerDay[i - 1] = [];
      this.workout.trainingDays.push(new TrainingDay(this.authenticatedUser.user, i, []));
    }
  }

  addExercise(dayNumber: number, exerciseNumber: number) {
    this.exerciseNumbersPerDay[dayNumber - 1].push(exerciseNumber);
    this.workout.trainingDays[dayNumber - 1].scheduledExercises.push(new ScheduledExercise(null,
      new ExerciseConfiguration(0, 0, 0, 0), null));
  }

  saveWorkoutConfiguration(form: NgForm) {

    if (form.valid) {
      this.workout.user = this.authenticatedUser.user;
      this.dayNumbers = [];
      this.populateArrays(this.workout.daysPerWeek, this.dayNumbers);
      this.populateExerciseNumbersPerDay();
      this.configurationDisabled = true;
    }
  }

  openDialog(dayNumber: number, multi: boolean, exerciseNumber?: number) {

    const dialogRef = this.dialog.open(SelectExerciseDialogComponent, {
      data: {
        selectedExercise: [],
        multi
      },
      height: '90%',
      width: 'fit-content',
      maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(
      response => {
        if (exerciseNumber) {
          this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseNumber - 1].exercise = response[0];
        } else {
          this.addScheduledExercises(response, dayNumber);
        }
      }
    );
  }

  private addScheduledExercises(response, dayNumber: number) {

    let exerciseIndex = 1;

    for (const exercise of response) {

      this.exerciseNumbersPerDay[dayNumber - 1].push(exerciseIndex);
      this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseIndex - 1] = (new ScheduledExercise(exercise,
        new ExerciseConfiguration(0, 0, 0, 0), null));
      exerciseIndex++;
    }
  }

  moveExerciseUp(dayNumber: number, exerciseIndex: number) {
    if (exerciseIndex > 1) {

      [this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseIndex - 2],
        this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseIndex - 1]] =
        [this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseIndex - 1],
          this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseIndex - 2]];
    }
  }

  moveExerciseDown(dayNumber: number, exerciseIndex: number) {
    if (exerciseIndex < this.workout.trainingDays[dayNumber - 1].scheduledExercises.length) {

      [this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseIndex - 1],
        this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseIndex]] =
        [this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseIndex],
          this.workout.trainingDays[dayNumber - 1].scheduledExercises[exerciseIndex - 1]];
    }
  }

  showWorkout(configurationForm: NgForm) {
    if (!this.checkValidity(configurationForm)) {
      this.snackbar.open('You have not filled in all the required fields!', null, {duration: 3000});
    }
  }

  saveWorkout(form: NgForm) {
    if (this.checkValidity(form)) {
      this.spinnerService.displaySpinner = true;
      this.workoutService.saveWorkout(this.workout).subscribe(
        response => {
          this.authenticatedUser.setUser();
          this.snackbar.open('Workout created successfully!', null, {duration: 3000});
          this.router.navigateByUrl('/workouts/home');
        },
        error => {
          this.snackbar.open('Error creating workout, please try again', null, {duration: 3000});
          this.spinnerService.displaySpinner = false;
        }
      );
    } else {
      this.snackbar.open('You have not filled in all the required fields!', null, {duration: 3000});
    }
  }

  removeScheduledExercise(dayNumber: number, exerciseNumber: number) {
    this.exerciseNumbersPerDay[dayNumber - 1].pop();
    this.workout.trainingDays[dayNumber - 1].scheduledExercises.splice(exerciseNumber - 1, 1);
  }

  checkValidity(configurationForm: NgForm): boolean {
    if (configurationForm.valid) {
      for (const trainingDay of this.workout.trainingDays) {
        if (trainingDay.scheduledExercises.length < 1) {
          return false;
        }
        for (const exercise of trainingDay.scheduledExercises) {
          if (exercise.exercise === null || exercise.configuration.minReps === 0 ||
            exercise.configuration.maxReps === 0 || exercise.configuration.numSets === 0) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  }

  reset(stepper: MatStepper, form: NgForm) {
    this.workout.numWeeks = null;
    this.workout.daysPerWeek = null;
    this.workout.referenceName = '';
    this.workout.trainingDays = [];
    this.populateExerciseNumbersPerDay();
    this.configurationDisabled = false;
    stepper.reset();
    form.resetForm();
  }
}
