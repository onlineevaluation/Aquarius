import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authInfo } from '../utils/auth.util';
import { Result } from '../domain/Result';
import { Observable } from 'rxjs';

@Injectable()
export class PageDetailsService {
  constructor(private http: HttpClient) {}

  getPageDetail(pageId: number): Observable<Result> {
    const studentId = authInfo().userId;
    const url = `/page/Score/${pageId}/${studentId}`;
    return this.http.get<Result>(url);
  }
}
