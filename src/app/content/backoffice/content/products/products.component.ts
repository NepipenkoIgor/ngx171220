import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UnSubscriber } from '../../../../unsubscriber';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { IProduct } from '../../../../store/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../store';
import { getProductsPending } from '../../../../store/actions/products.actions';

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends UnSubscriber implements OnInit {

  public onlyFavorites = false;

  public products$: Observable<IProduct[]> = this.store.select('products', 'items');
  public isLoading$: Observable<boolean> = this.store.select('products', 'isLoading');
  public searchTerm = '';

  public constructor(
    private readonly store: Store<IRootState>
  ) {
    super();
  }

  public ngOnInit(): void {
    this.store.dispatch(getProductsPending());
  }

  public search(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  public searchByFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }
}
