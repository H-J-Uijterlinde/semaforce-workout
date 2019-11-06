import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MuscleView} from '../../model/muscle/MuscleView';
import {Muscle} from '../../model/muscle/Muscle';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getMuscleViews() {
    return this.httpClient.get<MuscleView[]>(this.url + '/api/muscles/view');
  }

  getMuscleById(id: bigint) {
    return this.httpClient.get<MuscleView>(this.url + '/api/muscles/' + id);
  }

  createMuscle(muscle: Muscle) {
    return this.httpClient.post<Muscle>(this.url + '/api/muscles', muscle);
  }

  deleteMuscle(id: bigint) {
    return this.httpClient.delete(this.url + '/api/muscles/' + id);
  }
}
