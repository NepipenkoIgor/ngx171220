import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../store';
import { ICartProduct } from '../../../../store/reducers/cart.reducer';
import { UnSubscriber } from '../../../../unsubscriber';
import { decrementProductInCart, incrementProductInCart, removeProductFromCart } from '../../../../store/actions/cart.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { cartProductsWithBonuses } from '../../../../store/selector/cart.selector';

@Component({
  selector: 'course-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends UnSubscriber implements OnInit {

  public products$ = this.store.select(cartProductsWithBonuses).pipe(
    tap((products) => {
      if (products.length > 0) {
        return;
      }
      this.router.navigate(['/backoffice']);
    })
  );

  constructor(
    private readonly store: Store<IRootState>,
    private readonly router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    // this.store.select(selectCartProducts)
    //   .pipe(
    //     takeUntil(this.unSubscriber$$)
    //   )
    //   .subscribe((v) => {
    //     console.log(v);
    //   });
  }

  public incrementProduct(productForUpdate: { id: string, count: number }): void {
    this.store.dispatch(incrementProductInCart(productForUpdate));
  }

  public decrementProduct(productForUpdate: { id: string, count: number }): void {
    this.store.dispatch(decrementProductInCart(productForUpdate));

  }

  public removeProduct(productForUpdate: { id: string }): void {
    this.store.dispatch(removeProductFromCart(productForUpdate));
  }


  // tslint:disable-next-line:variable-name
  public trackByFn(_index: number, item: ICartProduct): string {
    return item._id;
  }
}
