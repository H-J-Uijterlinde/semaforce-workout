import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TrainingDayView} from '../../../model/workout/TrainingDayView';
import {WorkoutView} from '../../../model/workout/WorkoutView';
import {WorkoutService} from '../../../service/workout/workout.service';

@Component({
  selector: 'app-completed-workout-dialog',
  templateUrl: './completed-workout-dialog.component.html',
  styleUrls: ['./completed-workout-dialog.component.css']
})
export class CompletedWorkoutDialogComponent implements OnInit {

  trainingDays: TrainingDayView[];

  constructor(public dialogRef: MatDialogRef<CompletedWorkoutDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {workout: WorkoutView},
              private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService.getAllTrainingDaysByWorkoutId(this.data.workout.id).subscribe(
      response => this.trainingDays = response
    );
  }

}
