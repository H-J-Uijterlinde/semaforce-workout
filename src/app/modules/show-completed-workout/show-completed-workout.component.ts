import {Component, Input, OnInit} from '@angular/core';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {ScheduledExercise} from '../../model/workout/ScheduledExercise';

@Component({
  selector: 'app-show-completed-workout',
  templateUrl: './show-completed-workout.component.html',
  styleUrls: ['./show-completed-workout.component.css']
})
export class ShowCompletedWorkoutComponent implements OnInit {

  @Input()
  allTrainingDays: TrainingDayView[];

  trainingDay: TrainingDayView;
  exercises: ScheduledExercise[] = [];
  dayNumbers: number[] = [];
  weekNumbers: number[] = [];
  numWeeksForTrainingDay: number;

  constructor() { }

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
    this.trainingDay = this.allTrainingDays[dayNumber - 1];
    this.numWeeksForTrainingDay = this.trainingDay.currentWeek - 1;
    this.populateNumberArray(this.numWeeksForTrainingDay, this.weekNumbers);
    this.exercises = Object.values(this.trainingDay.scheduledExercises);
  }

  getWeekNumbers(multiplier: number): number[] {
    const weeknumber: number[] = [];
    for (let i = 1; i <= this.numWeeksForTrainingDay; i++) {
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
}
