import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result } from '../domain/Result';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PageService {
  constructor(private http: HttpClient) {}

  getProblem(classId: number, pageId: number): Observable<Result> {
    const params = new HttpParams()
      .set('classId', `${classId}`)
      .set('pageId', `${pageId}`);

    return this.http.get<Result>(`/page/exam`, { params }).pipe(
      map((result: Result) => {
        return result;
      }),
    );
  }
}
