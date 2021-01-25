import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductsFilterPipe } from './content/products/products-filter.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { BackofficeComponent } from './backoffice.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { ProductsService } from './content/products/products.service';
import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './content/products/products.component';
import { OneProductComponent } from './content/one-product/one-product.component';
import { ProductCardComponent } from './content/products/product-card/product-card.component';
import { OneProductResolverService } from './content/one-product/one-product-resolver.service';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ProductsFilterPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
    BackofficeComponent,
    ProductsComponent,
    OneProductComponent,
    ProductCardComponent
  ],
  imports: [
    SharedModule,
    BackofficeRoutingModule
  ],
  providers: [
    ProductsService,
    OneProductResolverService
  ]
})
export class BackofficeModule {
}
