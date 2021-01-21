import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'course-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
