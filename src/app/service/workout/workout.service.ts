import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Workout} from '../../model/workout/Workout';
import {Observable} from 'rxjs';
import {WorkoutView} from '../../model/workout/WorkoutView';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  saveWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.url + '/api/workouts', workout);
  }

  getWorkoutSummary(id: bigint): Observable<WorkoutView> {
    return this.http.get<WorkoutView>(this.url + `/api/users/${id}/current_workout`);
  }

  getTrainingDayByWorkoutId(id: bigint, dayNumber: number): Observable<TrainingDayView> {
    return this.http.get<TrainingDayView>(this.url + `/api/workouts/${id}/day${dayNumber}`);
  }

  getAllTrainingDaysByWorkoutId(id: bigint): Observable<TrainingDayView[]> {
    return this.http.get<TrainingDayView[]>(this.url + `/api/workouts/${id}/training_days`);
  }
}
