import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    SignupRoutingModule
  ]
})
export class SignupModule {
}
