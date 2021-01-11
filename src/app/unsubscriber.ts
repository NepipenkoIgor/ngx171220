import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UnSubscriber implements OnDestroy {
  // public subscriptions: Subscription[] = [];
  //
  //
  // public ngOnDestroy(): void {
  //   this.subscriptions.forEach((sub) => {
  //     sub.unsubscribe();
  //   });
  //   this.subscriptions = [];
  // }

  public unSubscriber$$ = new Subject();

  public ngOnDestroy(): void {
    this.unSubscriber$$.next();
    this.unSubscriber$$.complete();
  }

}
