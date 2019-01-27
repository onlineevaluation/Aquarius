import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PageService {
  constructor(private http: HttpClient) {
  }

  getProblem() {
    this.http.get("");
  }
}
