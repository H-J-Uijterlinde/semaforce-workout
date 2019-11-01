import {FormGroup, Validators} from '@angular/forms';
import {GeneralFormControl} from '../GeneralFormControl';
import {RepeatPasswordValidator} from './RepeatPasswordValidator';
import {User} from '../../model/user/User';

export class AccountRegistrationFormGroup extends FormGroup {

  constructor(user: User) {
    super({
      userName: new GeneralFormControl('Username', 'userName', 'text', '', Validators.required),

      password: new GeneralFormControl('Password', 'password', 'password', '',
        Validators.compose([Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])),

      repeatPassword: new GeneralFormControl('Repeat password', 'repeatPassword', 'password', '',
        Validators.compose([Validators.required,
          RepeatPasswordValidator.validateRepeatPassword(user)])),

      firstName: new GeneralFormControl('First name', 'firstName', 'text', '', Validators.required),

      lastName: new GeneralFormControl('Last name', 'lastName', 'text', '', Validators.required),

      email: new GeneralFormControl('Email address', 'email', 'email', '',
        Validators.compose([Validators.required, Validators.email]))
    });
  }

  get accountRegistrationControls(): GeneralFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as GeneralFormControl);
  }

  getFormValidationErrorMessages(): string[] {
    const messages: string[] = [];

    this.accountRegistrationControls.forEach(control => control.getValidationErrorMessages()
      .forEach(message => messages.push(message)));

    return messages;
  }
}
