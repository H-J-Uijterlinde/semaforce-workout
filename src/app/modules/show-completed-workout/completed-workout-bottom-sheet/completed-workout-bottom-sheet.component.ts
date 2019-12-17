import {Component, Inject, OnInit} from '@angular/core';
import {WorkoutView} from '../../../model/workout/WorkoutView';
import {WorkoutService} from '../../../service/workout/workout.service';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {TrainingDayView} from '../../../model/workout/TrainingDayView';
import {TrainingDayService} from '../../../service/training-day/training-day.service';

@Component({
  selector: 'app-completed-workout-bottom-sheet',
  templateUrl: './completed-workout-bottom-sheet.component.html',
  styleUrls: ['./completed-workout-bottom-sheet.component.css']
})
export class CompletedWorkoutBottomSheetComponent implements OnInit {

  trainingDays: TrainingDayView[];

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: {workout: WorkoutView, trainingDayId: bigint},
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
