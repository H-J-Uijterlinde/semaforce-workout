import {Injectable} from '@angular/core';
import {UserView} from "../../model/user/UserView";
import {HttpClientService} from "../http-client.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserService {

  private _user: UserView;

  constructor(private http: HttpClientService) {
    this.setUser();
  }

  setUser() {
    this.http.getUserViewByUsername(sessionStorage.getItem('username')).subscribe(
      response => {
        this._user = response;
      }
    );
  }

  get user(): UserView {
    return this._user;
  }

}
