import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TrainingDayView} from '../../../model/workout/TrainingDayView';
import {WorkoutView} from '../../../model/workout/WorkoutView';
import {WorkoutService} from '../../../service/workout/workout.service';
import {TrainingDayService} from '../../../service/training-day/training-day.service';

@Component({
  selector: 'app-completed-workout-dialog',
  templateUrl: './completed-workout-dialog.component.html',
  styleUrls: ['./completed-workout-dialog.component.css']
})
export class CompletedWorkoutDialogComponent implements OnInit {

  trainingDays: TrainingDayView[];

  constructor(public dialogRef: MatDialogRef<CompletedWorkoutDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {workout: WorkoutView, trainingDayId: bigint},
              private workoutService: WorkoutService,
              private trainingDayService: TrainingDayService) { }

  ngOnInit() {
    if (this.data.workout) {
      this.workoutService.getAllTrainingDaysByWorkoutId(this.data.workout.id).subscribe(
        response => this.trainingDays = response
      );
    } else if (this.data.trainingDayId) {
      this.trainingDayService.getTrainingDayById(this.data.trainingDayId).subscribe(
        response => {
          response.currentWeek++;
          this.trainingDays = [response];
        }
      );
    }
  }

}
