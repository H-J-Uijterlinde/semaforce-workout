import {Score} from "./Score";

export class WeeklyResult {

  constructor(
    public exerciseNumber: number,
    public weekNumber: number,
    public weightsLifted: number[],
    public repetitionsPerformed: number[],
    public rpe: number[],
    public numbersLifted: Score[]
  ) {
  }
}
