import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { OneProductInCartComponent } from './one-product-in-cart/one-product-in-cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [CartComponent, OneProductInCartComponent],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
