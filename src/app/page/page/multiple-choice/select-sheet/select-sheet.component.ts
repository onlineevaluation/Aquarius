import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatRadioChange,
  MatBottomSheetRef,
} from '@angular/material';
import { MultipleChoiceService } from '../multiple-choice.service';
import { StudentAns } from 'src/app/domain/StudentAns';

@Component({
  selector: 'app-select-sheet',
  templateUrl: './select-sheet.component.html',
  styleUrls: ['./select-sheet.component.scss'],
})
export class SelectSheetComponent implements OnInit {
  /**
   * A 选项是否选中
   */
  public isCheck_A: boolean = false;
  /**
   * B 选项是否选中
   */
  public isCheck_B: boolean = false;
  /**
   * C 选项是否选中
   */
  public isCheck_C: boolean = false;
  /**
   * D 选项是否选中
   */
  public isCheck_D: boolean = false;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private multipleService: MultipleChoiceService,
    private bottomSheetRef: MatBottomSheetRef<SelectSheetComponent>,
  ) {}

  ngOnInit() {
    // 默认选中的选项
    console.log('choice is ', this.data.studentChoice.ans);

    switch (this.data.studentChoice.ans) {
      case 'A':
        this.isCheck_A = true;
        break;
      case 'B':
        this.isCheck_B = true;
        break;
      case 'C':
        this.isCheck_C = true;
        break;
      case 'D':
        this.isCheck_D = true;
        break;
    }
  }

  /**
   * 选择的试题
   * @param e 选择选项
   */
  getChoice(e: MatRadioChange) {
    const studentChoice = new StudentAns();
    studentChoice.ans = e.value;
    studentChoice.problemId = this.data.studentChoice.problemId;
    studentChoice.titleNumber = this.data.studentChoice.titleNumber;
    this.multipleService.setStudent(studentChoice);
    this.bottomSheetRef.dismiss(studentChoice);
  }
}
