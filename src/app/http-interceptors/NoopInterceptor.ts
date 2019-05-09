import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * @author 杨晓辉
 * http 请求拦截器
 */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  // private baseUrl = 'http://106.12.195.114:8081';
  private baseUrl = 'http://localhost:8081';

  constructor(private router: Router, private snackBar: MatSnackBar) {}

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
          this.snackBar.open(`${error.error.message}`, '关闭', {
            duration: 2000,
          });
        },
      ),
    );
  }
}
