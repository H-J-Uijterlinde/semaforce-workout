import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user/User';
import {UserView} from '../model/user/UserView';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<UserView[]>(this.url + '/api/users/logged_in_users');
  }

  deleteUser(user: UserView) {
    return this.httpClient.delete<User>(this.url + '/api/users/' + user.id);
  }

  postUser(user: User) {
    return this.httpClient.post<User>(this.url + '/api/register', user);
  }

  getUserViewByUsername(username: string) {
    return this.httpClient.get<UserView>(this.url + '/api/users/' + username);
  }
}
