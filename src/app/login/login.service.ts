import { Injectable } from '@angular/core';
import { User } from '../domain/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result } from '../domain/Result';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtUser } from '../domain/JwtUser';
import { authInfo } from '../utils/auth.util';
@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private jwtHelpService: JwtHelperService,
  ) {}

  private loginUrl: string = '/user/login';
  /**
   * 用户验证用户登录，并保存 token
   * @param user 登录用户
   */
  doLogin(user: User): Observable<boolean> {
    return this.http.post<Result>(this.loginUrl, user).pipe(
      map(
        (result: Result) => {
          const user = this.jwtHelpService.decodeToken(result.data);
          const jwtUser = new JwtUser();
          jwtUser.exp = user.exp;
          jwtUser.iat = user.iat;
          jwtUser.sub = user.sub;
          jwtUser.classId = user.classId;
          jwtUser.userId = user.userId;
          // 将用户设置一下
          localStorage.setItem('token', `Bearer ${result.data}`);
          // 获取用户详细信息
          this.http
            .get<Result>(`/user/profile/${authInfo().userId}`)
            .subscribe((result: Result) => {
              localStorage.setItem('profile', JSON.stringify(result.data));
            });

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
