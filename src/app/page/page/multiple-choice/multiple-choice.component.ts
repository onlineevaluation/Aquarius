import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatRadioChange, MatBottomSheet } from '@angular/material';
import { Answer } from '../../../domain/Answer';
import { Problem } from 'src/app/domain/Problem';
import { SelectSheetComponent } from './select-sheet/select-sheet.component';
import { MultipleChoice } from 'src/app/domain/MultipleChoice';
import { MultipleChoiceService } from './multiple-choice.service';
import { StudentChoice } from 'src/app/domain/StudentChoice';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent implements OnInit {
  // 试题
  @Input() multipleChoice: Problem;
  // 题号
  @Input() index: number;

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
    this.bottomSheet.open(SelectSheetComponent, {
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
  }
}
