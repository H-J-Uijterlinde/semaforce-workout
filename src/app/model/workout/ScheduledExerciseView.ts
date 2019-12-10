export class ScheduledExerciseView {

  constructor(
    public exerciseName: string,
    public minReps: number,
    public maxReps: number,
    public numSets: number,
    public restBetweenSets: number
  ) {}
}
