import {Component, Inject, OnInit} from '@angular/core';
import {ExerciseView} from '../../../model/exercise/ExerciseView';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface ExerciseData {
  selectedExercise: ExerciseView[];
  multi: boolean;
}

@Component({
  selector: 'app-select-exercise-dialog',
  templateUrl: './select-exercise-dialog.component.html',
  styleUrls: ['./select-exercise-dialog.component.css']
})
export class SelectExerciseDialogComponent implements OnInit {

  // Properties needed to initialize the dialog.
  exercises: ExerciseView[];

  // Properties needed to keep track of the users choices.
  selectedExercises: Map<bigint, ExerciseView> = new Map<bigint, ExerciseView>();

  constructor(public dialogRef: MatDialogRef<SelectExerciseDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ExerciseData) {
  }

  ngOnInit() {

  }

  addOrRemoveExercise(exercise: ExerciseView) {
    if (this.selectedExercises.has(exercise.id)) {
      this.selectedExercises.delete(exercise.id);
    } else {
      this.selectedExercises.set(exercise.id, exercise);
    }
  }

  select() {
    if (this.data.multi) {
      this.dialogRef.close(this.selectedExercises.values());
    } else {
      this.dialogRef.close(this.data.selectedExercise);
    }
  }

  setExercises($event: ExerciseView[]) {
    this.exercises = $event;
  }
}
