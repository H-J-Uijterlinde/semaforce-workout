import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExerciseView} from '../../model/exercise/ExerciseView';
import {Exercise} from '../../model/exercise/Exercise';
import {ExerciseCategory} from '../../model/exercise/Category';
import {Observable} from 'rxjs';
import {MuscleView} from '../../model/muscle/MuscleView';
import {MuscleGroup} from "../../model/muscle/MuscleGroup";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getExerciseById(id: bigint) {
    return this.httpClient.get<Exercise>(this.url + '/api/exercises/' + id);
  }

  getExerciseViews() {
    return this.httpClient.get<ExerciseView[]>(this.url + '/api/exercises/view');
  }

  getExerciseViewsByCriteria(partOfName: string, category: ExerciseCategory, muscleGroup: MuscleGroup,
                             muscle: MuscleView): Observable<ExerciseView[]> {
    let categoryString = '';
    if (category !== null) {
      categoryString = category.valueOf();
    }
    let muscleGroupString = '';
    if (muscleGroup !== null) {
      muscleGroupString = muscleGroup.valueOf();
    }
    let muscleIdString = '';
    if (muscle !== null) {
      muscleIdString = muscle.id.toString();
    }

    return this.httpClient.get<ExerciseView[]>(this.url + `/api/exercises/view/nameContains=${partOfName}` +
      `/category=${categoryString}/muscleGroup=${muscleGroupString}/muscleId=${muscleIdString}`);
  }

  createExercise(exercise: Exercise) {
    return this.httpClient.post<Exercise>(this.url + '/api/exercises', exercise);
  }
}
