import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { IProduct, ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'course-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [
    // {
    //   provide: ProductsService,
    //   useClass: ProductsService,
    // }
  ]
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  public constructor(
    @Optional() @Self() private productsService: ProductsService
  ) {
  }

  public ngOnInit(): void {
    console.log('ProductCardComponent ==>', this.productsService?.timestamp);
  }

}
