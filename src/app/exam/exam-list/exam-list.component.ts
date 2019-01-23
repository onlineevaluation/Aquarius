import { Component, OnInit } from '@angular/core';
import { authInfo } from 'src/app/utils/auth.util';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss'],
})
export class ExamListComponent implements OnInit {
  exams = [
    {
      name: '数据结构链表测试',
      subtitle: '正在进行',
      desc: '1月7日09点18分-1月7日11点18分',
    },
    {
      name: '数据结构链表测试',
      subtitle: '正在进行',
      desc: '1月7日09点18分-1月7日11点18分',
    },
    {
      name: '数据结构链表测试',
      subtitle: '正在进行',
      desc: '1月7日09点18分-1月7日11点18分',
    },
    {
      name: '数据结构链表测试',
      subtitle: '正在进行',
      desc: '1月7日09点18分-1月7日11点18分',
    },
  ];

  constructor(private examService:ExamService) {}

  ngOnInit() {
    const jwtUser = authInfo();
    console.log('jwt user is ', jwtUser);
    // 获取 http 请求
  }
}
