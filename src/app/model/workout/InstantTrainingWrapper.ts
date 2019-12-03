import {TrainingDay} from './TrainingDay';
import {WeeklyResult} from './WeeklyResult';

export class InstantTrainingWrapper {

  constructor(
    public userId: bigint,
    public trainingDayDto: TrainingDay,
    public weeklyResultDtos: WeeklyResult[]
  ) {}
}
