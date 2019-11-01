import {UserView} from "../user/UserView";
import {ExerciseView} from "../exercise/ExerciseView";
import {WeeklyResult} from "./WeeklyResult";

export class Result {

  constructor(
    public user: UserView,
    public exercise: ExerciseView,
    public weeklyResults: WeeklyResult[]
  ) {
  }
}
