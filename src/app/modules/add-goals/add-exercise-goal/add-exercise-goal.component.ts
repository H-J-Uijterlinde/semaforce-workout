import {Component, OnInit} from '@angular/core';
import {GoalsService} from '../../../service/goals/goals.service';
import {AuthenticatedUserService} from '../../../service/authentication-service/authenticated-user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {ExerciseGoals} from '../../../model/goals/ExerciseGoals';
import {ExerciseView} from '../../../model/exercise/ExerciseView';
import {SelectExerciseDialogComponent} from '../../select-exercise-dialog/select-exercise-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import {DisplaySpinnerService} from '../../../service/navigation/display-spinner.service';
import {ExerciseGoalConfirmationDialogComponent} from '../exercise-goal-confirmation-dialog/exercise-goal-confirmation-dialog.component';

@Component({
  selector: 'app-add-exercise-goal',
  templateUrl: './add-exercise-goal.component.html',
  styleUrls: ['./add-exercise-goal.component.css']
})
export class AddExerciseGoalComponent implements OnInit {

  goal: ExerciseGoals = new ExerciseGoals(null, null, null, null, null, null, 0);
  selectedExercise: ExerciseView;

  constructor(private goalsService: GoalsService,
              private authenticatedUser: AuthenticatedUserService,
              private snackBar: MatSnackBar,
              private router: Router,
              public dialog: MatDialog,
              private spinner: DisplaySpinnerService) {
  }

  ngOnInit() {
  }

  openExerciseDialog() {

    const dialogRef = this.dialog.open(SelectExerciseDialogComponent, {
      data: {
        selectedExercise: [],
        multi: false
      }
    });

    dialogRef.afterClosed().subscribe(
      response => {
        if (response) {
          this.selectedExercise = response[0];
        }
      }
    );
  }

  openDialog(goal: ExerciseGoals) {
    goal.user = this.authenticatedUser.user;
    goal.exercise = this.selectedExercise;

    this.dialog.open(ExerciseGoalConfirmationDialogComponent, {
      data: {
        exerciseGoal: goal
      },
      disableClose: true
    });
  }

  saveGoal(form: NgForm) {
    if (form.valid) {
      this.spinner.displaySpinner = true;
      this.goal.user = this.authenticatedUser.user;
      this.goal.exercise = this.selectedExercise;
      this.goalsService.postExerciseGoal(this.goal).subscribe(
        success => {
          this.openDialog(success as ExerciseGoals);
          this.spinner.displaySpinner = false;
        }
      );
    }
  }

}
