import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../products.service';
import { ModalService } from '../../../../../modal/modal.service';

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
    private modalService: ModalService
  ) {
  }

  public ngOnInit(): void {
  }

  public async addToCart(): Promise<void> {
    const m = await import('./product-confirmation/product-confirmation.component')
    this.modalService.open({
      component: m.ProductConfirmationComponent,
      context: {
        product: {...this.product},
        save: () => {
          // add to cart
          console.log('Move product to cart')
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }
}
