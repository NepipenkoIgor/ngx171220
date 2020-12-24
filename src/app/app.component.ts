import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ngx171220 ';
  public drawer!: MatDrawer;

  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  constructor(
    // private cdr: ChangeDetectorRef
  ) {

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
}
/*
        (ChangeDetection)                                                                                 (ChangeDetection)----
   ----(oldValue = undefined, newValue=undefined ) (oldValue=undefined, newValue=object)------------------(oldValue, newValue )---


 */
