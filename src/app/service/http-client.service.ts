import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user/User';
import {UserView} from '../model/user/UserView';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<UserView[]>('http://77.163.10.148:8090/api/users/logged_in_users');
  }

  deleteUser(user: UserView) {
    return this.httpClient.delete<User>('http://77.163.10.148:8090/api/users/' + user.id);
  }

  postUser(user: User) {
    return this.httpClient.post<User>('http://77.163.10.148:8090/api/register', user);
  }

  getUserViewByUsername(username: string) {
    return this.httpClient.get<UserView>('http://77.163.10.148:8090/api/users/' + username);
  }
}
