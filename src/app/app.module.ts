import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BASE_URL } from './config';
import { AuthInterceptor } from './auth.interceptor';
import { ModalModule } from './modal/modal.module';

// NgModule => es6
// declarations => let/const => Directives, Pipes
// imports  => import  => NgModules
// exports => export => Directives, Pipes, NgModules


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductsFilterPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    HttpClientModule,
    ModalModule
  ],
  // entryComponents: [ProductConfirmationComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: BASE_URL,
      useValue: environment.baseUrl,
    },
    {
      provide: 'baseUrl',
      useValue: 'error',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

