import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../domain/Result';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  getRecommendResource(studentId: number): Observable<Result> {
    return this.http.get<Result>(`/recommend/resource/${studentId}`);
  }
}
