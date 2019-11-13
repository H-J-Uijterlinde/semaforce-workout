import { Component, OnInit } from '@angular/core';
import {GoalsService} from '../../../service/goals/goals.service';
import {AuthenticatedUserService} from '../../../service/authentication-service/authenticated-user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {ExerciseGoals} from '../../../model/goals/ExerciseGoals';
import {ExerciseView} from '../../../model/exercise/ExerciseView';
import {SelectExerciseDialogComponent} from '../../select-exercise-dialog/select-exercise-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-exercise-goal',
  templateUrl: './add-exercise-goal.component.html',
  styleUrls: ['./add-exercise-goal.component.css']
})
export class AddExerciseGoalComponent implements OnInit {

  goal: ExerciseGoals = new ExerciseGoals(null, null, null, null, null);
  selectedExercise: ExerciseView;

  constructor(private goalsService: GoalsService,
              private authenticatedUser: AuthenticatedUserService,
              private snackBar: MatSnackBar,
              private router: Router,
              public dialog: MatDialog) { }

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

  saveGoal(form: NgForm) {
    if (form.valid) {
      this.goal.user = this.authenticatedUser.user;
      this.goal.exercise = this.selectedExercise;
      this.goalsService.postExerciseGoal(this.goal).subscribe(
        success => {
          this.snackBar.open('Goal saved successfully!', null, {
            duration: 3000
          });
          this.router.navigateByUrl('/results');
        }
      );
    }
  }

}
