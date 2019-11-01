import {UserView} from '../user/UserView';
import {TrainingDay} from './TrainingDay';

export class Workout {

  constructor(
    public id: bigint,
    public user: UserView,
    public referenceName: string,
    public numWeeks: number,
    public daysPerWeek: number,
    public trainingDays: TrainingDay[]
  ) {
  }
}
