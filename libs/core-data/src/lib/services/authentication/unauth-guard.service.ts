import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeaturesUnAuthGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return of(false)
    // return this.authFacade.isUserAuthenticated$.pipe(
    //   map((userAuthenticated) => {
    //     if (!userAuthenticated) return true;
    //     this.router.navigateByUrl('/');
    //     return false;
    //   })
    // );
  }
}