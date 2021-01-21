import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

export interface IProduct {
  _id: string;
  title: string;
  img: string;
  price: number;
  author: string;
  isFavorite: boolean;
};

@Injectable()
export class ProductsService {

  public timestamp = Date.now();

  public constructor(
    // @Inject(HttpClient) private http: HttpClient
    private http: HttpClient,
    // private toaster: TosterService,
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products`).pipe(
      catchError((err) => {
        console.log(err);
        // show toaster this.toaster.showError(msg)
        return of([]);
      })
    );

    // fetch('http://localhost/products').catch((err)=>{})
  }

  // getFooterArticles() {
  //   return forkJoin([
  //     this.http.get('articles'), // this.articleService.getNewArticles()
  //     this.http.get('categories'),  // this.categoriesService.getPopularCategories()
  //   ]).pipe(map(([articles, categories]) => {
  //     return [];
  //   }), );
  // }
}
