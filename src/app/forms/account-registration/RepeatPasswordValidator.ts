import {FormControl} from '@angular/forms';
import {User} from '../../model/user/User';

export class RepeatPasswordValidator {

  static validateRepeatPassword(user: User) {

    return (control: FormControl): { [key: string]: any } => {
      const repeatedPassword = control.value;
      if (repeatedPassword !== user.password) {
        return {noMatch: {message: 'Passwords don\'t match.'}};
      } else {
        return null;
      }
    };
  }
}
