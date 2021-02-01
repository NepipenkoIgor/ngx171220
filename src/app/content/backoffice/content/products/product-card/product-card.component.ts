import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../../../modal/modal.service';
import { IProduct } from '../../../../../store/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../../store';
import { addProductToCart } from '../../../../../store/actions/cart.actions';

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
    private modalService: ModalService,
    private store: Store<IRootState>,
  ) {
  }

  public ngOnInit(): void {
  }

  public async addToCart(): Promise<void> {
    const m = await import('./product-confirmation/product-confirmation.component');
    this.modalService.open({
      component: m.ProductConfirmationComponent,
      context: {
        product: {...this.product},
        save: () => {
          // add to cart
          console.log('Move product to cart');
          this.store.dispatch(addProductToCart({product: {...this.product}}));
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }
}
