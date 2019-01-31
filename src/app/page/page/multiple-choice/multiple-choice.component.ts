import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Problem } from 'src/app/domain/Problem';
import { SelectSheetComponent } from './select-sheet/select-sheet.component';
import { MultipleChoiceService } from './multiple-choice.service';
import { StudentChoice } from 'src/app/domain/StudentChoice';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent implements OnInit {
  /**
   * 传入的多选题
   */
  @Input() multipleChoice: Problem;
  /**
   * 传入的题号
   */
  @Input() index: number;
  @Output() public answered = new EventEmitter<any>();
  public cardList;
  constructor(
    private bottomSheet: MatBottomSheet,
    private multipleService: MultipleChoiceService,
  ) {}

  ngOnInit() {}

  /**
   * 将题号和选择存起来
   * @param titleNumber 题号
   */
  openChoice(titleNumber: number) {
    let choiceList = this.multipleService.choiceList;
    var flag = choiceList.find(item => item.titleNumber === titleNumber);
    let studentChoice = new StudentChoice();
    if (flag === undefined) {
      studentChoice.titleNumber = titleNumber;
      studentChoice.choiced = '';
      studentChoice.problemId = this.multipleChoice.id;
    } else {
      studentChoice = flag;
    }
    // 下面非常有用 上面垃圾但是还不能删除，有时间重构
    let resultRef = this.bottomSheet.open(SelectSheetComponent, {
      data: {
        choice: [
          this.multipleChoice.sectionA,
          this.multipleChoice.sectionB,
          this.multipleChoice.sectionC,
          this.multipleChoice.sectionD,
        ],
        studentChoice: studentChoice,
      },
    });
    let studentResult = new StudentChoice();
    studentResult.titleNumber = -1;
    studentResult.choiced = '';
    resultRef.afterDismissed().subscribe(next => {
      studentResult = next;
      this.answered.emit(studentResult);
    });
  }
}
