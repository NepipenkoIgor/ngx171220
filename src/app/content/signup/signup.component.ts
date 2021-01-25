import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'course-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // public signUpForm = new FormGroup({
  //   username: new FormControl(),
  //   passwordGroup: new FormGroup({
  //     password: new FormControl(),
  //     cpassword: new FormControl()
  //   })
  // });

  public signUpForm!: FormGroup;

  private baseValidators = [Validators.required, Validators.minLength(5)];

  constructor(
    private readonly fb: FormBuilder
    //  private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [...this.baseValidators]],
      passwordGroup: this.fb.group({
        password: ['', [...this.baseValidators]],
        cpassword: ['', [...this.baseValidators]]
      })
    });
  }

  public signup(): void {
    console.log(this.signUpForm.value);
  }
}
