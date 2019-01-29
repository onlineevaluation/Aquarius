import { Injectable } from '@angular/core';
import { StudentChoice } from 'src/app/domain/StudentChoice';

@Injectable()
export class MultipleChoiceService {
  /**
   * 保存选择题数据
   */
  public choiceList: Array<StudentChoice> = [];

  constructor() {}

  setStudent(titleNumber: number, choiced: string) {
    const studentChoice = new StudentChoice();
    studentChoice.choiced = choiced;
    studentChoice.titleNumber = titleNumber;
    if (this.choiceList.length === 0) {
      this.choiceList.push(studentChoice);
    } else {
      let flag = false;
      for (let i = 0; i < this.choiceList.length; i++) {
        if (titleNumber === this.choiceList[i].titleNumber) {
          this.choiceList.splice(i, 1, studentChoice);
          flag = true;
        }
      }
      if (!flag) {
        this.choiceList.push(studentChoice);
      }
    }
    console.log('list is ', this.choiceList);
  }
}
