import {Injectable} from '@angular/core';
import {AuthenticatedUserService} from '../authentication-service/authenticated-user.service';
import {HttpClientService} from '../http-client.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserView} from '../../model/user/UserView';

@Injectable()
export class AuthenticatedUserResolver {

  constructor(private authenticatedUser: AuthenticatedUserService,
              private http: HttpClientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserView> {
    return this.authenticatedUser.user === null || this.authenticatedUser.user === undefined ?
      this.http.getUserViewByUsername(sessionStorage.getItem('username')) : null;
  }
}
