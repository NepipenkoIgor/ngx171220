import { Component, OnInit, Optional } from '@angular/core';
import { UnSubscriber } from './unsubscriber';
import { Event, NavigationStart, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UnSubscriber implements OnInit {


  public constructor(
    @Optional() private router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter(this.isNavigationStart),
        filter((e: NavigationStart) => {
          return e.id === 1;
        }),
        take(1)
      )
      .subscribe((e) => {
        console.log(e);
      });
  }

  private isNavigationStart(e: Event): e is NavigationStart {
    return e instanceof NavigationStart;
  }
}
