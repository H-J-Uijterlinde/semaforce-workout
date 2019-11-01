import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Workout} from '../../model/workout/Workout';
import {Observable} from 'rxjs';
import {WorkoutView} from '../../model/workout/WorkoutView';
import {TrainingDayView} from '../../model/workout/TrainingDayView';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) {
  }

  saveWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>('http://77.163.10.148:8090/api/workouts', workout);
  }

  getWorkoutSummary(id: bigint): Observable<WorkoutView> {
    return this.http.get<WorkoutView>(`http://77.163.10.148:8090/api/users/${id}/current_workout`);
  }

  getTrainingDayByWorkoutId(id: bigint, dayNumber: number): Observable<TrainingDayView> {
    return this.http.get<TrainingDayView>(`http://77.163.10.148:8090/api/workouts/${id}/day${dayNumber}`);
  }
}
