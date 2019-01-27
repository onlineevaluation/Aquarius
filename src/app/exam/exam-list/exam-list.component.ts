import { Component, OnInit } from '@angular/core';
import { authInfo } from 'src/app/utils/auth.util';
import { ExamService } from '../exam.service';
import { Exam } from 'src/app/domain/Exam';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss'],
})
export class ExamListComponent implements OnInit {
  exams: Array<Exam>;

  constructor(private examService: ExamService) {}

  ngOnInit() {
    const jwtUser = authInfo();
    console.log('jwt user is ', jwtUser);
    this.examService.getExam().subscribe(
      next => {
        console.log('exams is ', next);
        this.exams = next;
      },
      error => {
        console.log('发生了错误', error);
      },
    );
  }
}
