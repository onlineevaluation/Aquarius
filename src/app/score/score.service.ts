import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../domain/Result';
import { authInfo } from '../utils/auth.util';
import { Observable } from 'rxjs';
import { Profile } from '../domain/Profile';

@Injectable()
export class ScoreService {
  private studentId: number;
  constructor(private http: HttpClient) {
    var profileJson = localStorage.getItem('profile');
    const profile: Profile = JSON.parse(profileJson);
    this.studentId = profile.identity;
  }

  getStudentScore(): Observable<Result> {
    return this.http.get<Result>(`/page/scores/${this.studentId}`);
  }
}
