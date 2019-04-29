import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result } from '../domain/Result';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StudentAns } from '../domain/StudentAns';
import { StudentResult, Ans } from '../domain/StudentResult';
import { authInfo } from '../utils/auth.util';
import { Profile } from '../domain/Profile';

@Injectable()
export class PageService {
  private studentId: number;
  constructor(private http: HttpClient) {}
  /**
   * 获得试卷
   * @param classId 班级id
   * @param pageId 试卷id
   */
  getProblem(classId: number, pageId: number): Observable<Result> {
    const params = new HttpParams()
      .set('classId', `${classId}`)
      .set('pageId', `${pageId}`);

    return this.http.get<Result>(`/page/exam`, { params }).pipe(
      map((result: Result) => {
        console.log('page is ', result);
        return result;
      }),
    );
  }

  getCode() {}

  /**
   * 将学生答案发送给后端
   * @param pageId 页面数
   * @param choiceAns 选择题答案
   * @param blankAns 填空题
   * @param questionAns 简答题
   */
  submitPage(
    pageId: number,
    choiceAns: Array<StudentAns>,
    blankAns: Array<StudentAns>,
    questionAns: Array<StudentAns>,
    algornreAns: Array<StudentAns>,
  ): Observable<Result> {
    const studentResult = new StudentResult();
    studentResult.pageId = pageId;
    var profileJson = localStorage.getItem('profile');
    const profile: Profile = JSON.parse(profileJson);
    this.studentId = profile.identity;
    studentResult.studentId = this.studentId;
    choiceAns
      .filter(item => item.problemId !== undefined)
      .forEach(item => {
        const ans = new Ans();
        ans.id = item.problemId;
        ans.ans = item.ans;
        studentResult.answer.push(ans);
      });
    blankAns
      .filter(item => item.problemId !== undefined)
      .forEach(item => {
        const ans = new Ans();
        ans.id = item.problemId;
        ans.ans = item.ans;
        studentResult.answer.push(ans);
      });
    questionAns
      .filter(item => item.problemId !== undefined)
      .forEach(item => {
        const ans = new Ans();
        ans.id = item.problemId;
        ans.ans = item.ans;
        studentResult.answer.push(ans);
      });
    algornreAns
      .filter(item => item.problemId !== undefined)
      .forEach(item => {
        console.log('item', item);
        const ans = new Ans();
        ans.id = item.problemId;
        ans.ans = item.ans;
        studentResult.answer.push(ans);
      });
    console.log('student result ', JSON.stringify(studentResult));

    return this.http.post<Result>(
      '/page/addAns',
      JSON.stringify(studentResult),
    );
  }
}
