import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

export const validationMessages: ValidationErrors = {
  required: 'This field is required',
  minlength: 'Please add more characters',
  maxlength: 'Please remove some characters',
  pattern: 'Invalid entry/password',
  email: 'Must be a valid email format',
  date: 'Invalid Date',
  forbiddenItem: "Do not add this item again please",
};

@Pipe({
  name: 'csErrorKeys',
})
export class ErrorKeysPipe implements PipeTransform {
  transform(errors?: ValidationErrors | null): string[] | undefined {
    if (!errors) return;
    return Object.keys(errors);
  }
}
