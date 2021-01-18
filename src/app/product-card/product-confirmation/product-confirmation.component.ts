import { Component, NgModule } from '@angular/core';
import { IProduct } from '../../shared/services/products.service';
import { UnSubscriber } from '../../unsubscriber';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'course-product-confirmation',
  templateUrl: './product-confirmation.component.html',
  styleUrls: ['./product-confirmation.component.css']
})
export class ProductConfirmationComponent extends UnSubscriber {

  public product!: IProduct;
  public save = () => {
  };
  public close = () => {

  };

}

@NgModule({
  declarations: [ProductConfirmationComponent],
  imports: [MatButtonModule, MatCardModule]
})
export class ProductConfirmationModule {

}
