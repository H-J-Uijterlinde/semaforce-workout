import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication-service/authentication.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthenticatedUserService} from "../../service/authentication-service/authenticated-user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private snackbar: MatSnackBar,
              private authenticatedUser: AuthenticatedUserService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    this.authenticationService.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['']);
        this.invalidLogin = false;
        this.authenticatedUser.setUser();
      },
      error => {
        this.invalidLogin = true;
        this.snackbar.open('Login failed, invalid combination of username and password.', null, { duration: 3000});
      }
    );
  }
}
