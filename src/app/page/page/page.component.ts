import {Component, OnInit} from '@angular/core';
import {MultipleChoice} from '../../domain/MultipleChoice';
import {Answer} from '../../domain/Answer';
import {CodeProblem} from '../../domain/CodeProblem';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public MultipleChoices: Array<MultipleChoice> = [
    new MultipleChoice(1, '测试题目1', '这是答案A', '这是答案B', '这是答案C', '这是答案D'),
    new MultipleChoice(2, '测试题目2', '这是答案A', '这是答案B', '这是答案C', '这是答案D'),
    new MultipleChoice(3, '测试题目3', '这是答案A', '这是答案B', '这是答案C', '这是答案D'),
    new MultipleChoice(4, '测试题目4', '这是答案A', '这是答案B', '这是答案C', '这是答案D')
  ];

  public CodeProblems: Array<CodeProblem> = [
    new CodeProblem(1, '用c语言实现一个双向链表…………', '512kb', '5000ms')
  ];


  public answers: Array<Answer> = [];

  constructor() {
  }

  ngOnInit() {

  }

  /**
   * 获取单选题答案
   * @param ans 单选题答案
   */
  showMultipleAnswer(ans: Answer) {
    if (this.answers.length === 0) {
      this.answers.push(ans);
    } else {
      let flag = false;
      for (let i = 0; i < this.answers.length; i++) {
        if (ans.id === this.answers[i].id) {
          this.answers.splice(i, 1, ans);
          flag = true;
        }
      }
      if (!flag) {
        this.answers.push(ans);
      }
    }
  }

  showCodeAnswer(answer: Answer) {
    console.log('code ans is ', answer);
  }
}
