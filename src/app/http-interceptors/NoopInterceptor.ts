import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * @author 杨晓辉
 * http 请求拦截器
 */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  private baseUrl = 'http://localhost:8081';

  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let ok: string;
    let request: HttpRequest<any>;
    // 登录无需要token
    if (req.url === '/user/login') {
      request = req.clone({
        url: `${this.baseUrl}${req.url}`,
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    } else {
      request = req.clone({
        url: `${this.baseUrl}${req.url}`,
        headers: req.headers.set(
          'Authorization',
          localStorage.getItem('token'),
        ),
      });
    }

    return next.handle(request).pipe(
      tap(
        event => (ok = event instanceof HttpErrorResponse ? 'success' : ''),
        (error: HttpErrorResponse) => {
          switch (error.status) {
            case 403:
              // 登录错误，返回
              console.log('403了');
              localStorage.clear();
              this.router.navigateByUrl('/login');
              break;
          }
          console.log('拦截器的error', error);
        },
      ),
    );
  }
}
