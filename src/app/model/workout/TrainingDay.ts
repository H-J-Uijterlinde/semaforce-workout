import {ScheduledExercise} from './ScheduledExercise';
import {UserView} from '../user/UserView';

export class TrainingDay {

  constructor(
    public user: UserView,
    public dayNumber: number,
    public scheduledExercises: ScheduledExercise[]
  ) {

  }
}
