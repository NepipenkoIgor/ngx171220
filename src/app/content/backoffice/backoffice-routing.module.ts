import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { ProductsComponent } from './content/products/products.component';
import { OneProductComponent } from './content/one-product/one-product.component';

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
        path: ':productId',
        component: OneProductComponent
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
