import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { IExchangeRate } from './exchange-rates.component';

export enum ExchangeAutoplayMode {
  OFF = 'off',
  ON = 'on'
}

@Directive({
  selector: '[courseExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit {

  @Input('courseExchangeRatesFrom')
  public rates: IExchangeRate[] = [];

  @Input('courseExchangeRatesAutoplay')
  public mode!: ExchangeAutoplayMode;

  @Input('courseExchangeRatesMs')
  public ms = 2000;

  private intervalID!: number | null;

  private index = 0;
  private context: any = {};

  constructor(
    private tmpl: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {
  }

  public ngOnInit(): void {
    console.log(this.rates);
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      }
    };
    this.vcr.createEmbeddedView(this.tmpl, this.context);
    this.resetInterval();
  }

  public next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  public prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private resetInterval(): void {
    if (this.mode === ExchangeAutoplayMode.OFF) {
      return;
    }
    this.clearInterval()
      .initInterval();
  }

  private initInterval(): void {
    this.intervalID = setInterval(() => {
      this.next();
    }, this.ms);
  }

  private clearInterval(): this {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
    return this;
  }
}
