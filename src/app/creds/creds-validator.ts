import { ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";

export class CredsValidator {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const isValid = regex.test(control.value);
      return isValid ? null : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl) {
    const password = control.get("password").value;
    const confirmPasswordControl = control.get("confirmPassword");
    const confirmPassword = confirmPasswordControl.value;
    if (password !== confirmPassword) {
      confirmPasswordControl.setErrors({ noPasswordMatch: true });
    }
  }
}

export const regexContants = {
  HAS_NUMBER: /\d/,
  HAS_CAPITAL_CASE: /[A-Z]/,
  HAS_LOWER_CASE: /[a-z]/,
  HAS_SPECIAL_CHAR: /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
};
