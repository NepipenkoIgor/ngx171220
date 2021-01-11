import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, mockedProducts$ } from './products';
import { Observable } from 'rxjs';
import { UnSubscriber } from './unsubscriber';
import { takeUntil } from 'rxjs/operators';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UnSubscriber implements OnInit, OnDestroy {
  public title = 'ngx171220 ';
  public drawer!: MatDrawer;
  public onlyFavorites = false;

  public products$: Observable<IProduct[]> = mockedProducts$;
  public searchTerm = '';
  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  constructor(
    // private cdr: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    mockedProducts$
      .pipe(
        takeUntil(this.unSubscriber$$)
      )
      .subscribe((products: IProduct[]) => {
        console.log(products);
        // this.products = products;
      }, () => {
      }, () => {
        console.log('COMPLETED');
      });
  }


  public ngOnDestroy(): void {
    // do something
    super.ngOnDestroy();
  }

  public toggleSideNav(event: any): void {
    console.log(event);
  }

  public setSideNav(drawer: MatDrawer): void {
    this.drawer = drawer;
    // this.cdr.detectChanges();
    // setTimeout(() => {
    //
    // });
    // Promise.resolve().then(() => {
    //   this.drawer = drawer;
    // });
  }

  public search(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  public searchByFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }
}
