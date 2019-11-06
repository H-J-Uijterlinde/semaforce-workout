import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeeklyResult} from '../../model/workout/WeeklyResult';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddResultService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addResult(trainingDayId: bigint, results: WeeklyResult[]) {

    return this.http.
    post<TrainingDayView>(this.url + '/api/training_days/' + trainingDayId + '/add_results', results);
  }
}
