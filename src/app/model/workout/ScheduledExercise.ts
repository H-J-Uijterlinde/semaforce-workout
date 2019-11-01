import {ExerciseView} from '../exercise/ExerciseView';
import {ExerciseConfiguration} from './ExerciseConfiguration';
import {Result} from "./Result";

export class ScheduledExercise {

  constructor(
    public exercise: ExerciseView,
    public configuration: ExerciseConfiguration,
    public results: Result
  ) {
  }
}
