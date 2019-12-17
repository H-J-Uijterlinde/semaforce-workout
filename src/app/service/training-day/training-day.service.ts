import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrainingDayMiniView} from '../../model/workout/TrainingDayMiniView';
import {environment} from '../../../environments/environment';
import {TrainingDayView} from '../../model/workout/TrainingDayView';

@Injectable({
  providedIn: 'root'
})
export class TrainingDayService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTrainingDaysByInstantWorkoutAndUserId(userId: bigint): Observable<TrainingDayMiniView[]> {
    return this.http.get<TrainingDayMiniView[]>(this.url + '/api/training_days/views/user=' + userId);
  }

  getTrainingDayById(trainingDayId: bigint): Observable<TrainingDayView> {
    return this.http.get<TrainingDayView>(this.url + '/api/training_days/' + trainingDayId);
  }

  // todo: create delete trainingday functions
}
