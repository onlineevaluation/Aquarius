import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { StudentAns } from 'src/app/domain/StudentAns';
import { GapFillingService } from '../gap-filling.service';

@Component({
  selector: 'app-blank-sheet',
  templateUrl: './blank-sheet.component.html',
  styleUrls: ['./blank-sheet.component.scss'],
})
export class BlankSheetComponent implements OnInit, OnDestroy {
  public studentAnsArray: Array<StudentAns> = [];
  /**
   * 学生答案
   */
  public ans: Array<string> = [];
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<BlankSheetComponent>,
    private gapFillingService: GapFillingService,
  ) {}

  ngOnInit() {
    let anses = this.data.studentAns.ans.split('】【');
    const firstAns = anses[0].replace('【', '');
    anses.splice(0, 1, firstAns);
    const lastAns = anses[anses.length - 1].replace('】', '');
    anses.splice(anses.length - 1, 1, lastAns);
    for (let i = 0; i < this.data.blankNumber; i++) {
      this.ans.push(anses[i]);
      let studentAns = new StudentAns();
      this.studentAnsArray.push(studentAns);
    }
    this.data.studentAns.ans = this.ans;
  }

  ngOnDestroy() {
    if (this.data.studentAns.ans != '') {
      this.data.studentAns.ans = `【${this.ans.join('】【')}】`;
    } else {
      this.data.studentAns.ans = '';
    }
    this.gapFillingService.setList(this.data.studentAns);
    this.bottomSheetRef.dismiss(this.data.studentAns);
  }
}
