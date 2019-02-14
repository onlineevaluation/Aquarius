import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../domain/Result';
import { authInfo } from '../utils/auth.util';
import { Observable } from 'rxjs';

@Injectable()
export class ScoreService {
  constructor(private http: HttpClient) {}

  getStudentScore(): Observable<Result> {
    let userId = authInfo().userId;
    return this.http.get<Result>(`/page/scores/${userId}`);
  }
}
