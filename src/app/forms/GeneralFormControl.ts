import {FormControl} from '@angular/forms';

export class GeneralFormControl extends FormControl {
  label: string;
  property: string;
  type: string;

  constructor(label: string, property: string, type: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.property = property;
    this.type = type;
  }

  public getValidationErrorMessages(): string[] {

    const errorMessages: string[] = [];

    if (this.errors) {

      // tslint:disable-next-line:forin
      for (const errorName in this.errors) {

        switch (errorName) {

          case 'required':
            errorMessages.push(`${this.label} is required.`);
            break;

          case 'minlength':
            errorMessages.push(`${this.label}s must be at least ${this.errors.minlength.requiredLength} characters.`);
            break;

          case 'pattern':
            errorMessages.push(`${this.label}s must contain at least one letter, one number, one uppercase letter,
            and one special character.`);
            break;

          case 'email':
            errorMessages.push('Please enter a valid email address.');
            break;

          case'noMatch':
            errorMessages.push(this.errors.noMatch.message);
            break;
        }
      }
    }

    return errorMessages;
  }
}
