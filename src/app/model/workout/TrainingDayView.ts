import {ScheduledExercise} from "./ScheduledExercise";

export class TrainingDayView {

  constructor(
    public id: bigint,
    public dayNumber: number,
    public currentWeek: number,
    public scheduledExercises: Map<string, ScheduledExercise>
  ) {

  }
}
