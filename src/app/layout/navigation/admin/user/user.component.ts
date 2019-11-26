import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../../service/http-client.service';
import {UserView} from '../../../../model/user/UserView';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['Username', 'email', 'delete'];
  users: UserView[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }

  deleteUser(user: UserView): void {
    this.httpClientService.deleteUser(user).subscribe(
      data => this.users = this.users.filter(u => u !== user)
    );
  }
}
