import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { ProductsComponent } from './content/products/products.component';
import { OneProductComponent } from './content/one-product/one-product.component';
import { OneProductResolverService } from './content/one-product/one-product-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'cart',
        loadChildren: () => import('./content/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: ':productId',
        component: OneProductComponent,
        data: {
          title: 'One product'
        },
        resolve: {
          product: OneProductResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BackofficeRoutingModule {
}
