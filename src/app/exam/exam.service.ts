import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { authInfo } from '../utils/auth.util';
import { JwtUser } from '../domain/JwtUser';
import { Result } from '../domain/Result';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exam } from '../domain/Exam';
import { VerifyPageParam } from '../domain/Params';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private base_url = '/page';
  private classId: number;
  private exams: Array<Exam>;
  constructor(private http: HttpClient) {
    const jwtUser: JwtUser = authInfo();
    this.classId = jwtUser.classId;
  }

  /**
   * 通过班级id获取试卷信息
   * @param classId 班级id
   *
   */
  getExam(): Observable<Array<Exam>> {
    return this.http.get<Result>(`${this.base_url}/exams/${this.classId}`).pipe(
      map(
        (result: Result) => {
          this.exams = result.data;
          return this.exams;
        },
        (error: Result) => {
          console.log('error is ', error);
        },
      ),
    );
  }

  verifyPage(studentId: number, pageId: number): Observable<Result> {
    const bodyParams = {
      studentId: studentId,
      pageId: pageId,
    };
    const params = new VerifyPageParam();
    params.pageId = pageId;
    params.studentId = studentId;

    console.log('发送请求');
    return this.http.post<Result>(`${this.base_url}/verifyPage`, params).pipe(
      map(
        (result: Result) => {
          console.log('result verify', result);
          return result;
        },
        (error: Result) => {
          console.log('error is ', error);
        },
      ),
    );
  }
}
