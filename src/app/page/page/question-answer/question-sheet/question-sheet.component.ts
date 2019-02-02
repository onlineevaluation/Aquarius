import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-question-sheet',
  templateUrl: './question-sheet.component.html',
  styleUrls: ['./question-sheet.component.scss'],
})
export class QuestionSheetComponent implements OnInit, OnDestroy {
  public ans: String = '';

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<QuestionSheetComponent>,
  ) {}

  ngOnInit() {
    // 给答案设置初值
    this.ans = this.data.studentAns.ans;
  }

  ngOnDestroy() {
    this.data.studentAns.ans = this.ans;
    this.bottomSheetRef.dismiss(this.data.studentAns);
  }
}
