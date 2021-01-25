import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BASE_URL } from '../config';
import { environment } from '../../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { OnlyLettersDirective } from './validators/only-letters.directive';

const internalModules = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule
];

const externalModules = [
  MatToolbarModule,
  MatSidenavModule,
  FlexLayoutModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  HttpClientModule,
];

@NgModule({
  imports: internalModules,
  exports: [
    ...internalModules,
    ...externalModules,
    OnlyLettersDirective
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  declarations: [OnlyLettersDirective]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        AuthGuard,
        {
          provide: BASE_URL,
          useValue: environment.baseUrl,
        },
      ]
    };
  }
}
