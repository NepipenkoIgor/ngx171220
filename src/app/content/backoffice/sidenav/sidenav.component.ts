import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'course-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer', {static: true})
  public drawerInst!: MatDrawer;

  @Output()
  public setDrawer = new EventEmitter(true);

  ngOnInit(): void {
    this.setDrawer.emit(this.drawerInst);
  }
}
