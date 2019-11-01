export class WorkoutView {

  constructor(
    public id: bigint,
    public referenceName: string,
    public numWeeks: number,
    public daysPerWeek: number,
    public currentDay: number
  ) {
  }
}
