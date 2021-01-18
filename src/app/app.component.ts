import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { UnSubscriber } from './unsubscriber';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { IProduct, ProductsService } from './shared/services/products.service';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UnSubscriber implements OnInit, OnDestroy {
  public title = 'ngx171220 ';
  public drawer!: MatDrawer;
  public onlyFavorites = false;

  public products$: Observable<IProduct[]> = this.productsService.getProducts();
  public searchTerm = '';
  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  public constructor(
    // private cdr: ChangeDetectorRef,
    @Optional() private productsService: ProductsService
  ) {
    super();
  }

  public ngOnInit(): void {

    // const sequence$$ = new ReplaySubject();
    //
    // sequence$$.subscribe((v) => {
    //   console.log(`From subject`, v);
    // });
    //
    // setTimeout(() => {
    //   const obj = {title: 'RxJS awesome'};
    //   console.log('EMIT event', obj);
    //   sequence$$.next(obj);
    // }, 5000);
    //
    // setTimeout(() => {
    //   const obj = {title: 'Angular awesome'};
    //   console.log('EMIT event', obj);
    //   sequence$$.next(obj);
    // }, 10000);
    // setTimeout(() => {
    //   sequence$$.subscribe((v) => {
    //     console.log(`From subject 2`, v);
    //   });
    // }, 15000);
  }


  public ngOnDestroy(): void {
    // do something
    super.ngOnDestroy();
  }

  public toggleSideNav(_event: any): void {
   // console.log(event);
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
