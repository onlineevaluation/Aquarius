import {Component, OnInit} from '@angular/core';
import {Exam} from '../../domain/Exam';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  exams = [
    {
      'name': '数据结构链表测试',
      'subtitle': '正在进行',
      'desc': '1月7日09点18分-1月7日11点18分',
    },
    {
      'name': '数据结构链表测试',
      'subtitle': '正在进行',
      'desc': '1月7日09点18分-1月7日11点18分',

    },
    {
      'name': '数据结构链表测试',
      'subtitle': '正在进行',
      'desc': '1月7日09点18分-1月7日11点18分',

    },
    {
      'name': '数据结构链表测试',
      'subtitle': '正在进行',
      'desc': '1月7日09点18分-1月7日11点18分',

    },
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
