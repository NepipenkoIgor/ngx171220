import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'course-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  public product$ = this.activatedRoute.paramMap
    .pipe(
      switchMap((paramMap) => {
        const productId = paramMap.get('productId');
        return this.http.get(`/products/${productId}`)
      })
    );

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot)
    // this.activatedRoute.paramMap
    //   .pipe(
    //     switchMap((paramMap) => {
    //       const productId = paramMap.get('productId');
    //       return this.http.get(`/products/${productId}`);
    //     })
    //   )
    //   .subscribe((product) => {
    //     console.log(product);
    //   });
  }

}
