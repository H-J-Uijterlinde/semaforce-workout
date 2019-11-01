import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeeklyResult} from "../../model/workout/WeeklyResult";
import {TrainingDayView} from "../../model/workout/TrainingDayView";

@Injectable({
  providedIn: 'root'
})
export class AddResultService {

  constructor(private http: HttpClient) { }

  addResult(trainingDayId: bigint, results: WeeklyResult[]) {

    return this.http.
    post<TrainingDayView>('http://77.163.10.148:8090/api/training_days/' + trainingDayId + '/add_results', results);
  }
}
