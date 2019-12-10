import {TrainingDay} from './TrainingDay';
import {WeeklyResult} from '../results/WeeklyResult';

export class InstantTrainingWrapper {

  constructor(
    public userId: bigint,
    public trainingDayDto: TrainingDay,
    public weeklyResultDtos: WeeklyResult[]
  ) {}
}
