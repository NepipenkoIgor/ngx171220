import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from '../../../../../store/reducers/cart.reducer';

@Component({
  selector: 'course-one-product-in-cart',
  templateUrl: './one-product-in-cart.component.html',
  styleUrls: ['./one-product-in-cart.component.css']
})
export class OneProductInCartComponent {

  @Input()
  public product!: ICartProduct;

  @Output()
  public increment = new EventEmitter();

  @Output()
  public decrement = new EventEmitter();

  @Output()
  public remove = new EventEmitter();

  public incrementProduct(): void {
    // tslint:disable-next-line:prefer-const
    let {_id: id, count} = this.product;
    this.increment.emit({id, count: count + 1});
  }

  public decrementProduct(): void {
    // tslint:disable-next-line:prefer-const
    let {_id: id, count} = this.product;
    if (count === 1) {
      this.remove.emit({id});
      return;
    }

    this.decrement.emit({id, count: count - 1});
  }

  public removeProduct(): void {
    const {_id: id} = this.product;
    this.remove.emit({id});
  }

}
