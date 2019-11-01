import {MuscleView} from "../muscle/MuscleView";
import {ExerciseCategory} from "./Category";
import {MuscleGroup} from "../muscle/MuscleGroup";

export class Exercise {
  constructor(
    public name: string,
    public musclesTrained: MuscleView[],
    public muscleGroup: MuscleGroup,
    public category: ExerciseCategory
  ) {
  }
}
