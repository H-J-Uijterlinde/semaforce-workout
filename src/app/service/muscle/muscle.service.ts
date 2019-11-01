import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MuscleView} from '../../model/muscle/MuscleView';
import {Muscle} from '../../model/muscle/Muscle';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  constructor(private httpClient: HttpClient) {
  }

  getMuscleViews() {
    return this.httpClient.get<MuscleView[]>('http://77.163.10.148:8090/api/muscles/view');
  }

  getMuscleById(id: bigint) {
    return this.httpClient.get<MuscleView>('http://77.163.10.148:8090/api/muscles/' + id);
  }

  createMuscle(muscle: Muscle) {
    return this.httpClient.post<Muscle>('http://77.163.10.148:8090/api/muscles', muscle);
  }

  deleteMuscle(id: bigint) {
    return this.httpClient.delete('http://77.163.10.148:8090/api/muscles/' + id);
  }
}
