import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router
  ) {
  }

  canActivate(
    // tslint:disable-next-line:variable-name
    _route: ActivatedRouteSnapshot,
    {url}: RouterStateSnapshot): Observable<boolean> {
    const accessToken = localStorage.getItem('accessToken');
    return of(!!accessToken)
      .pipe(switchMap((isLogged: boolean) => {
        if (!isLogged && (url === '/login' || url === '/signup')) {
          return of(true);
        }
        if (isLogged && (url === '/login' || url === '/signup')) {
          this.router.navigate(['/backoffice']);
          return of(false);
        }
        if (!isLogged) {
          this.router.navigate(['/login']);
        }
        return of(isLogged);
      }));

  }

}
