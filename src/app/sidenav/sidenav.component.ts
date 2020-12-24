import {
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'course-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SidenavComponent implements OnInit {

  @ContentChild('contentTemplate', {static: true})
  public contentTmpl!: TemplateRef<any>;

  @ViewChild('drawer', {static: true})
  public drawerInst!: MatDrawer;

  @ViewChild('container', {static: true, read: ViewContainerRef})
  public containerForContent!: ViewContainerRef;

  @Output()
  public setDrawer = new EventEmitter(true);

  ngOnInit(): void {
    this.containerForContent.createEmbeddedView(this.contentTmpl);
    this.setDrawer.emit(this.drawerInst);
  }
}
