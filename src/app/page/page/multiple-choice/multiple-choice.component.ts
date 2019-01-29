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
  @Input() multipleChoice: Problem;
  @Input() index: number;
  @Output() public answered = new EventEmitter<Answer>();
  studentAnswer: string;
  constructor(
    private bottomSheet: MatBottomSheet,
    private multipleService: MultipleChoiceService,
  ) {}

  ngOnInit() {}

  getChoice(e: MatRadioChange, id: number) {
    // console.log('e is ', e.value, id);
    const ans = new Answer();
    ans.id = id;
    ans.answer = e.value;
    this.answered.emit(ans);
  }

  /**
   * 将题号和选择存起来
   * @param titleNumber 题号
   */
  openChoice(titleNumber: number) {
    console.log('title number is ', titleNumber);

    let choiceList = this.multipleService.choiceList;
    var flag = choiceList.find(item => item.titleNumber === titleNumber);
    console.log('student choice is ', flag);
    let studentChoice = new StudentChoice();
    if (flag === undefined) {
      studentChoice.titleNumber = titleNumber;
      studentChoice.choiced = '';
    } else {
      studentChoice = flag;
    }
    console.log('student list is ', choiceList);
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
