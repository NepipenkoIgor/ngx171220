import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input()
  public titleText: string = '';

  @Input()
  public sideNavDrawer!: MatDrawer;

  constructor(
  ) {
  }

  public ngOnInit(): void {
    console.log('ngOnInit');

  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
