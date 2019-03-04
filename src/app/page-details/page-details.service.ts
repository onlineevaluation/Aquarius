import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authInfo } from '../utils/auth.util';
import { Result } from '../domain/Result';
import { Observable } from 'rxjs';

@Injectable()
export class PageDetailsService {
  constructor(private http: HttpClient) {}

  /**
   * 获取试卷详细信息
   * @param pageId 试卷id
   */
  getPageDetail(pageId: number): Observable<Result> {
    const studentId = authInfo().userId;
    const url = `/page/Score/${pageId}/${studentId}`;
    return this.http.get<Result>(url);
  }

  /**
   * 获取用户信息
   * @param userId 用户 id
   */
  getUserProfile(): Observable<Result> {
    const userId = authInfo().userId;
    return this.http.get<Result>(`/user/profile/${userId}`);
  }
}
