import {Component, Inject, OnInit} from '@angular/core';
import {ExerciseGoals} from '../../../model/goals/ExerciseGoals';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GoalsService} from '../../../service/goals/goals.service';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

export interface ExerciseGoalConfirmation {
  exerciseGoal: ExerciseGoals;
}

@Component({
  selector: 'app-exercise-goal-confirmation-dialog',
  templateUrl: './exercise-goal-confirmation-dialog.component.html',
  styleUrls: ['./exercise-goal-confirmation-dialog.component.css']
})
export class ExerciseGoalConfirmationDialogComponent implements OnInit {

  goal: ExerciseGoals;
  estimatedWeight: number;
  startingVolumeAvailable = false;
  invalidGoal = false;

  constructor(public dialogRef: MatDialogRef<ExerciseGoalConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ExerciseGoalConfirmation,
              private goalsService: GoalsService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.goal = this.data.exerciseGoal;
    if (this.goal.startingVolume !== 0 &&
      this.goal.startingVolume < (this.goal.desiredWeight * this.goal.desiredSets * this.goal.desiredReps)) {
      this.startingVolumeAvailable = true;
    }
    if (this.goal.startingVolume > (this.goal.desiredWeight * this.goal.desiredSets * this.goal.desiredReps)) {
      this.invalidGoal = true;
    }
  }



  saveStartingVolume(form: NgForm) {
    if (form.valid) {
      this.goal.startingVolume = this.goal.desiredReps * this.goal.desiredSets * this.estimatedWeight;
      this.goalsService.editExerciseGoal(this.goal).subscribe(
        success => {
          this.snackBar.open('Goal saved successfully!', null, {
            duration: 3000
          });
          this.router.navigateByUrl('/results');
          this.dialogRef.close();
        }
      );
    }
  }

  closeDialog() {
    this.snackBar.open('Goal saved successfully!', null, {
      duration: 3000
    });
    this.router.navigateByUrl('/results');
    this.dialogRef.close();
  }

  closeDialogInvalidGoal() {
    this.goalsService.removeGoal(this.goal.id).subscribe();
    this.dialogRef.close();
  }
}
