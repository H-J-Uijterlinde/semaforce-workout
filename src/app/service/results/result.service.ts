import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeeklyResult} from '../../model/results/WeeklyResult';
import {TrainingDayView} from '../../model/workout/TrainingDayView';
import {environment} from '../../../environments/environment';
import {ChartRequest} from '../../model/results/chart-request';
import {ChartData} from '../../model/results/chart-data';
import {Observable} from 'rxjs';
import {InstantTrainingWrapper} from '../../model/workout/InstantTrainingWrapper';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addResult(trainingDayId: bigint, results: WeeklyResult[]) {

    return this.http.
    post<TrainingDayView>(this.url + '/api/training_days/' + trainingDayId + '/add_results', results);
  }

  addInstantTrainingResults(wrapperDto: InstantTrainingWrapper) {

    return this.http.post(this.url + '/api/training_days/instant_training', wrapperDto);
  }

  getResultsForGraph(requestData: ChartRequest): Observable<ChartData> {
    return this.http.post<ChartData>(this.url + '/api/results/graphical', requestData);
  }
}
