import {
  Component, DoCheck,
  Input,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IExchangeRate } from './exchange-rates/exchange-rates.component';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  @Input()
  public titleText: string = '';

  @Input()
  public sideNavDrawer!: MatDrawer;

  public exchangeRates: IExchangeRate[] = [
    {value: 28, currency: 'USD'},
    {value: 0.33, currency: 'RUB'},
    {value: 33, currency: 'EUR'},
  ]
  public ngDoCheck(): void {
    console.log('Detect changes');
  }
}
