import { Injectable } from '@angular/core';
import { User } from '../domain/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result } from '../domain/Result';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtUser } from '../domain/JwtUser';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private jwtHelpService: JwtHelperService,
  ) {}

  private loginUrl: string = 'http://localhost:8081/user/login';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  /**
   * 用户验证用户登录，并保存 token
   * @param user 登录用户
   */
  doLogin(user: User): Observable<boolean> {
    console.log('doLogin', user);
    return this.http.post<Result>(this.loginUrl, user, this.httpOptions).pipe(
      map(
        (result: Result) => {
          const user = this.jwtHelpService.decodeToken(result.data.token);
          console.log('user is ', user);
          const jwtUser = new JwtUser();
          jwtUser.auth = user.auth;
          jwtUser.exp = user.exp;
          jwtUser.iat = user.iat;
          jwtUser.sub = user.sub;
          // 将用户设置一下
          return true;
        },
        error => {
          console.log('登录错误信息', error);
          return false;
        },
      ),
    );
  }
}
