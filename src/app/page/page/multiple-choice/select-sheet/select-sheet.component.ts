import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatRadioChange } from '@angular/material';
import { MultipleChoiceService } from '../multiple-choice.service';
import { StudentChoice } from 'src/app/domain/StudentChoice';

@Component({
  selector: 'app-select-sheet',
  templateUrl: './select-sheet.component.html',
  styleUrls: ['./select-sheet.component.scss'],
})
export class SelectSheetComponent implements OnInit {
  // a b c d 四个选项选中状态
  public check_A: boolean = false;
  public check_B: boolean = false;
  public check_C: boolean = false;
  public check_D: boolean = false;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private multipleService: MultipleChoiceService,
  ) {}

  ngOnInit() {
    // 默认选中的选项
    switch (this.data.studentChoice.choiced) {
      case 'A':
        this.check_A = true;
        break;
      case 'B':
        this.check_B = true;
        break;
      case 'C':
        this.check_C = true;
        break;
      case 'D':
        this.check_D = true;
        break;
    }
  }

  /**
   * 选择的试题
   * @param e 选择选项
   */
  getChoice(e: MatRadioChange) {
    const studentChoice = new StudentChoice();
    studentChoice.choiced = e.value;
    studentChoice.problemId = this.data.studentChoice.problemId;
    studentChoice.titleNumber = this.data.studentChoice.titleNumber;
    this.multipleService.setStudent(studentChoice);
  }
}
