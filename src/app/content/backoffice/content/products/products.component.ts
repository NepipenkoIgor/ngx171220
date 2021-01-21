import { Component, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';
import { UnSubscriber } from '../../../../unsubscriber';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends UnSubscriber {

  public onlyFavorites = false;

  public products$: Observable<IProduct[]> = this.productsService.getProducts();
  public searchTerm = '';

  public constructor(
    @Optional() private productsService: ProductsService,
  ) {
    super();
  }

  public search(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  public searchByFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }
}
