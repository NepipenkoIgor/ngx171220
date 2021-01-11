import { Component, Input, OnInit } from '@angular/core';
import { ExchangeAutoplayMode } from './exchange-rates.directive';

export interface IExchangeRate {
  value: number;
  currency: string;
}

@Component({
  selector: 'course-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {


  @Input()
  public rates: IExchangeRate[] = [];

  public mode: ExchangeAutoplayMode = ExchangeAutoplayMode.ON;

  public ms: number = 10000;

  constructor() {
  }

  ngOnInit(): void {
  }

}
