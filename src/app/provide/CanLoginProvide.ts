import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CanLoginGuard implements CanActivate, CanLoad {
  
  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    // this.check().subscribe(
    //   next => {
    //     if (!next) {
    //       this.router.navigateByUrl('/')
    //     }
    //   },
    //   error => console.log(`error is ${error}`),
    // );
    // console.log('b is ', b);
    return this.check();
  }

  check(): Observable<boolean> {
    return new Observable(observer => {
      const token = localStorage.getItem('token');
      console.log(`token is ${token}`);
      if (token != null) {
        console.log('已经登录');
        observer.next(true);
        observer.complete();
        return;
      }
      console.log('没有登录');

      observer.next(false);
      observer.complete();
      this.router.navigateByUrl("/login")
    });
  }
}
