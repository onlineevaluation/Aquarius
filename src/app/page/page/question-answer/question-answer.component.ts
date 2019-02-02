import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Problem } from 'src/app/domain/Problem';
import { StudentAns } from 'src/app/domain/StudentAns';
import { QuestionAnswerService } from './question-answer.service';
import { QuestionSheetComponent } from './question-sheet/question-sheet.component';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss'],
})
export class QuestionAnswerComponent implements OnInit {
  @Input() question: Problem;
  @Input() index: number;
  constructor(
    private bottomSheet: MatBottomSheet,
    private questionService: QuestionAnswerService,
  ) {}
  @Output() public questionAns = new EventEmitter<StudentAns>();
  ngOnInit() {}

  writeAns() {
    let studentAns = new StudentAns();
    studentAns.ans = '';
    studentAns.problemId = this.question.id;
    studentAns.titleNumber = this.index + 1;
    studentAns = this.questionService.findByTitleNumber(studentAns);
    const ref = this.bottomSheet.open(QuestionSheetComponent, {
      data: { studentAns: studentAns },
    });
    ref.afterDismissed().subscribe(next => {
      this.questionAns.emit(next);
    });
    this.questionService.setList(studentAns);
  }
}
