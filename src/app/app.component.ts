import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'course-root',
  // template: '<div>Hi All</div>'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | null = 'ngx171220 ';
  baseUrl = environment.baseUrl;

  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  public imgWidth = 50;
  public content = '<span>My content</span>';
  public text = '';
  private salary = 3000;

  public user = {
    name: 'Ihor'
  };

  public getSalary(): number {
    return Math.round(1.2 * this.salary);
  }

  public search(event: Event, el: HTMLElement): void {
    this.text = (event.target as HTMLInputElement).value;
    console.log('search', this.text, el);
  }

  // constructor() {
  //   this.init();
  // }
  //
  // init(_a: number): void {
  //   this.title = null;
  //   this.destroy();
  // }
  //
  // destroy(): void {
  //   if (this.title === null) {
  //     return;
  //   }
  //   this.title.includes('asdasd');
  // }
}
