import { Component} from '@angular/core';
import { UnSubscriber } from '../../unsubscriber';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'course-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent extends UnSubscriber {
  public title = 'ngx171220 ';
  public drawer!: MatDrawer;
  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  public setSideNav(drawer: MatDrawer): void {
    this.drawer = drawer;
  }


}
