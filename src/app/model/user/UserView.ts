import {WorkoutView} from "../workout/WorkoutView";

export class UserView {
  constructor(
    public id: bigint,
    public username: string,
    public email: string,
    public currentWorkout: WorkoutView
  ) {}
}
