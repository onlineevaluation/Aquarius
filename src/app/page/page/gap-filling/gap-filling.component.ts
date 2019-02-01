import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Problem } from 'src/app/domain/Problem';
import { MatBottomSheet } from '@angular/material';
import { BlankSheetComponent } from './blank-sheet/blank-sheet.component';
import { StudentAns } from 'src/app/domain/StudentAns';
import { GapFillingService } from './gap-filling.service';


@Component({
  selector: 'app-gap-filling',
  templateUrl: './gap-filling.component.html',
  styleUrls: ['./gap-filling.component.scss'],
})
export class GapFillingComponent implements OnInit {
  public blank =
    '这是一个 <input type="text" placeholder="填写正确答案" class="input-text" ' +
    'style="border-style: none none solid none;outline: none; width: 120px">  ';
  /**
   * 试题题号
   */
  @Input() index: number;
  /**
   * 传入的试题
   */
  @Input() blankProblem: Problem;
  @Output() public blankAns = new EventEmitter<StudentAns>();

  constructor(
    private bottomSheet: MatBottomSheet,
    private gapFillingService: GapFillingService,
  ) {}

  ngOnInit() {}

  writeAns() {
    let studentAns = new StudentAns();
    studentAns.ans = '';
    studentAns.problemId = this.blankProblem.id;
    studentAns.titleNumber = this.index + 1;
    studentAns = this.gapFillingService.findByTitleNumber(studentAns);
    const ref = this.bottomSheet.open(BlankSheetComponent, {
      data: { studentAns: studentAns, blankNumber: this.blankProblem.blankNum },
    });
    ref.afterDismissed().subscribe(next => {
      studentAns = next;
      // 通知外部
      this.blankAns.emit(studentAns);
    });
    // 设置到 `list` 里
    this.gapFillingService.setList(studentAns);
  }
}
