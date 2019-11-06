import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

export class Login {
  constructor(
    public username: string,
    public password: string
  ) {
  }
}

export class JwtResponse {
  constructor(
    public jwtToken: string

) {
}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username, password) {
    return this.httpClient.
    post<any>(this.url + '/api/authenticate', {username, password}).
    pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
