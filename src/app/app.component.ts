import { Component, OnInit } from '@angular/core';
import { UnSubscriber } from './unsubscriber';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UnSubscriber implements OnInit {


  public constructor() {
    super();
  }

  public ngOnInit(): void {
  }
}
