import { CredsValidator, regexContants } from "./creds-validator";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-creds",
  templateUrl: "./creds.component.html",
  styleUrls: ["./creds.component.scss"]
})
export class CredsComponent implements OnInit {
  public changePwdForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePwdForm = this.createForm();
  }

  ngOnInit() {}

  createForm(): FormGroup {
    return this.fb.group(
      {
        currentPwd: [null, Validators.required],
        password: [
          null,
          Validators.compose([
            Validators.required,
            CredsValidator.patternValidator(regexContants.HAS_NUMBER, {
              hasNumber: true
            }),
            CredsValidator.patternValidator(regexContants.HAS_CAPITAL_CASE, {
              hasCapitalCase: true
            }),
            CredsValidator.patternValidator(regexContants.HAS_LOWER_CASE, {
              hasLowerCase: true
            }),
            CredsValidator.patternValidator(regexContants.HAS_SPECIAL_CHAR, {
              hasSpecialChars: true
            }),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.required]
      },
      {
        validators: CredsValidator.passwordMatchValidator
      }
    );
  }

  submit() {
    console.log(this.changePwdForm.value);
  }
}
