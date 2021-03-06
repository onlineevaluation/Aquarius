import { Injectable } from '@angular/core';
import { StudentAns } from 'src/app/domain/StudentAns';
/**
 * 选择题数据存储
 */
@Injectable()
export class MultipleChoiceService {
  /**
   * 保存选择题数据
   */
  public choiceListLength: number = 0;
  public choiceList: Array<StudentAns> = new Array(this.choiceListLength);

  constructor() {}

  /**
   * 保存学生选择答案
   * @param studentChoiceParam 学生选择答案
   */
  setStudent(studentChoiceParam: StudentAns) {
    const studentChoice = new StudentAns();
    studentChoice.ans = studentChoiceParam.ans;
    studentChoice.titleNumber = studentChoiceParam.titleNumber;
    studentChoice.problemId = studentChoiceParam.problemId;
    if (this.choiceList.length === 0) {
      this.choiceList.push(studentChoice);
    } else {
      let flag = false;
      for (let i = 0; i < this.choiceList.length; i++) {
        if (studentChoiceParam.titleNumber === this.choiceList[i].titleNumber) {
          this.choiceList.splice(i, 1, studentChoice);
          flag = true;
        }
      }
      if (!flag) {
        this.choiceList.push(studentChoice);
      }
    }
  }
}
