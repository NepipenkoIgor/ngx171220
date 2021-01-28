import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    private readonly fb: FormBuilder,
    private http: HttpClient,
    //  private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [...this.baseValidators], [this.uniqueUserName.bind(this)]],
      emails: this.fb.array(['']),
      male: [true],
      passwordGroup: this.fb.group({
        password: ['', [...this.baseValidators]],
        cpassword: ['', [...this.baseValidators]]
      })
    });

    this.signUpForm.get('male')?.valueChanges.subscribe((v) => {
      console.log(v);
    });
  }

  public signup(): void {
    console.log(this.signUpForm.value);
  }

  public getArrayControls(name: string): FormControl[] {
    return (this.signUpForm.get(name) as FormArray).controls as FormControl[];
  }

  public addEmail(): void {
    (this.signUpForm.get('emails') as FormArray).push(this.fb.control('', [Validators.required]));
  }

  public removeEmail(index: number): void {
    (this.signUpForm.get('emails') as FormArray).removeAt(index);
  }

  private uniqueUserName({value: username}: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.post('/auth/checkUsername', {username});
  }

}
