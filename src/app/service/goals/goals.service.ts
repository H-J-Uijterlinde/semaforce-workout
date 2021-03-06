import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TotalWorkouts} from '../../model/goals/TotalWorkouts';
import {environment} from '../../../environments/environment';
import {ExerciseGoals} from '../../model/goals/ExerciseGoals';
import {Observable} from 'rxjs';
import {GoalsView} from '../../model/goals/GoalsView';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  postTotalWorkoutGoal(goal: TotalWorkouts) {
    return this.http.post(this.url + '/api/goals/total_workouts', goal);
  }

  postExerciseGoal(goal: ExerciseGoals) {
    return this.http.post(this.url + '/api/goals/exercise_goals', goal);
  }

  editExerciseGoal(goal: ExerciseGoals) {
    return this.http.put(this.url + '/api/goals/exercise_goals', goal);
  }

  getGoalViewsByUserId(userId: bigint, isActive: boolean): Observable<GoalsView[]> {
    return this.http.get<GoalsView[]>(this.url + '/api/goals/view/user=' + userId + '/active=' + isActive);
  }

  removeGoal(goalId: bigint) {
    return this.http.delete(this.url + '/api/goals/' + goalId);
  }
}
