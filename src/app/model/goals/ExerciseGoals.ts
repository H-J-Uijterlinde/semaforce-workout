import {UserView} from '../user/UserView';
import {ExerciseView} from '../exercise/ExerciseView';

export class ExerciseGoals {

  constructor(
    public user: UserView,
    public exercise: ExerciseView,
    public desiredReps: number,
    public desiredSets: number,
    public desiredWeight: number
  ) {}
}
