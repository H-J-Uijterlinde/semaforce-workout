import {ScheduledExercise} from "./ScheduledExercise";

export class TrainingDay {

  constructor(
    public dayNumber: number,
    public scheduledExercises: ScheduledExercise[]
  ) {

  }
}
