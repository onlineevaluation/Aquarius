import { Injectable } from '@angular/core';
import { User } from '../domain/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../domain/Result';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

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
  doLogin(user: User): Observable<Result> {
    console.log('doLogin', user);
    return this.http.post<Result>(this.loginUrl, user, this.httpOptions);
  }
}
