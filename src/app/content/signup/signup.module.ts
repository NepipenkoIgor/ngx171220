import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    SharedModule,
    SignupRoutingModule
  ]
})
export class SignupModule {
}
