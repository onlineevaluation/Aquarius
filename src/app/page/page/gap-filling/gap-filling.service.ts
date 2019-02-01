import { Injectable } from '@angular/core';
import { StudentAns } from 'src/app/domain/StudentAns';

@Injectable({
  providedIn: 'root',
})
export class GapFillingService {
  private studentAnsList: Array<StudentAns> = [];

  constructor() {}

  setList(studentAns: StudentAns) {
    if (this.studentAnsList.length === 0) {
      this.studentAnsList.push(studentAns);
    } else {
      let flag = false;
      for (let i = 0; i < this.studentAnsList.length; i++) {
        if (studentAns.titleNumber === this.studentAnsList[i].titleNumber) {
          this.studentAnsList.splice(i, 1, studentAns);
          flag = true;
        }
      }
      if (!flag) {
        this.studentAnsList.push(studentAns);
      }
    }
  }

  findByTitleNumber(studentAns: StudentAns): StudentAns {
    const flag = this.studentAnsList.find(
      Ans => Ans.titleNumber === studentAns.titleNumber,
    );
    if (flag !== undefined) {
      studentAns = flag;
    }
    return studentAns;
  }
}
