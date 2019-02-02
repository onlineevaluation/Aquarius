import { Component, Input, OnInit } from '@angular/core';
import { Exam } from '../../domain/Exam';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-item',
  templateUrl: './exam-item.component.html',
  styleUrls: ['./exam-item.component.scss'],
})
export class ExamItemComponent implements OnInit {
  @Input() item: Exam;
  private num: number;
  private message: string;
  public state: string;
  constructor(public snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {
    const startTime = Date.parse(this.item.startTime);
    console.log('startTime is ', startTime);
    const endTime = Date.parse(this.item.endTime);
    const currentTime = new Date().getUTCMilliseconds;
    console.log('当前时间为', currentTime);
    if (currentTime >= startTime && endTime < currentTime) {
      console.log('doing');
    } else if (startTime > currentTime) {
      // 还未开始
      console.log('还未开始');
    } else if (currentTime > endTime) {
      // 已经结束
      console.log('已经结束');
    }
  }

  startExam() {
    //  弹出吐司
    this.num = Math.random() * 10;
    if (this.num <= 4) {
      this.message = '我劝天公重抖擞，不拘一格降人才。';
    } else if (this.num <= 7 && this.num > 4) {
      this.message = '及时当勉励，岁月不待人。';
    } else {
      this.message = '成风破浪会有时，直挂云帆济沧海。';
    }

    // 计算吐司内容
    this.snackBar.open(this.message, '关闭', {
      duration: 2000,
    });
    // 路由转跳
    this.router.navigate(['/page', this.item.pagesId, this.item.classId]);
  }
}
