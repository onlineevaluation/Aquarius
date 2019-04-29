import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authInfo } from '../utils/auth.util';
import { Result } from '../domain/Result';
import { Observable } from 'rxjs';
import { Profile } from '../domain/Profile';

@Injectable()
export class PageDetailsService {
  private studentId: number;
  constructor(private http: HttpClient) {
    var profileJson = localStorage.getItem('profile');
    const profile: Profile = JSON.parse(profileJson);
    this.studentId = profile.identity;
  }

  /**
   * 获取试卷详细信息
   * @param pageId 试卷id
   */
  getPageDetail(pageId: number): Observable<Result> {
    const studentId = this.studentId;
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
