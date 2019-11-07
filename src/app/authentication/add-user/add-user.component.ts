import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user/User';
import {AccountInfo} from '../../model/user/account-info';
import {HttpClientService} from '../../service/http-client.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AccountRegistrationFormGroup} from '../../forms/account-registration/AccountRegistrationFormGroup';
import {FormGroup} from '@angular/forms';
import {DisplaySpinnerService} from "../../service/navigation/display-spinner.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  info: AccountInfo = new AccountInfo('', '', '');
  user: User = new User(null, '', '', this.info);

  submitAttempted = false;
  form: AccountRegistrationFormGroup = new AccountRegistrationFormGroup(this.user);

  constructor(private httpClientService: HttpClientService,
              private router: Router,
              private snackBar: MatSnackBar,
              private spinnerService: DisplaySpinnerService) {
  }

  ngOnInit() {
  }

  createUser(form: FormGroup): void {

    this.submitAttempted = true;
    this.spinnerService.displaySpinner = true;

    if (form.valid) {
      this.httpClientService.postUser(this.user).subscribe(
        data => {
          this.router.navigate(['/login']);
          this.snackBar.open('Account created successfully', null, {
            duration: 3000
          });
        },
        error => {
          this.snackBar.open('Could not create account, please try again', null, {
            duration: 3000
          });
          this.spinnerService.displaySpinner = false;
        }
      );
    }
  }
}
