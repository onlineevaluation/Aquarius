import { Component, OnInit } from '@angular/core';
import { Answer } from '../domain/Answer';
import { CodeProblem } from '../domain/CodeProblem';
import { ActivatedRoute, Params } from '@angular/router';
import { PageService } from './page.service';
import { Problem } from '../domain/Problem';
import { MultipleChoiceService } from './page/multiple-choice/multiple-choice.service';
import { StudentChoice } from '../domain/StudentChoice';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  /**
   * 选择题数据
   */
  public multipleChoices: Array<Problem> = [];
  /**
   * 选择题答题卡数据
   */
  public multipleChoicesCard: Array<StudentChoice> = [];

  public CodeProblems: Array<CodeProblem> = [
    new CodeProblem(1, '用c语言实现一个双向链表…………', '512kb', '5000ms'),
  ];
  public msg: string="时分秒";
  private time = 3600000;
  /**
   * 计时器
   */
  public timeDown: Date = new Date();
  public blankProblems: Array<Problem>;

  public answers: Array<Answer> = [];
  private pagesId: number;
  private classId: number;

  constructor(
    private router: ActivatedRoute,
    private pageService: PageService,
    public multipleService: MultipleChoiceService,
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.pagesId = params['pageId'];
      this.classId = params['classId'];
    });

    this.pageService.getProblem(this.classId, this.pagesId).subscribe(next => {
      this.multipleChoices = next.data.signChoice;
      this.blankProblems = next.data.blank;
      this.multipleChoicesCard.length = this.multipleChoices.length;
      for (let i = 0; i < this.multipleChoicesCard.length; i++) {
        const studentChoice = new StudentChoice();
        // 题号是从1题开始的
        studentChoice.titleNumber = i + 1;
        studentChoice.choiced = '';
        this.multipleChoicesCard[i] = studentChoice;
      }
    });
    this.resetTime(this.time);
    console.log('init ', this.multipleChoicesCard);
  }

  /**
   * 获取单选题答案
   */
  showMultipleAnswer(ans: StudentChoice) {
    // console.log('card list', this.multipleChoicesCard);
    console.log('ans is ', ans);
    if (ans !== undefined) {
      for (let i = 0; i < this.multipleChoicesCard.length; i++) {
        if (ans.titleNumber === this.multipleChoicesCard[i].titleNumber) {
          this.multipleChoicesCard.splice(i, 1, ans);
        }
      }
    }
    console.log('this card is ', this.multipleChoicesCard);
  }

  /**
   *
   * @param answer 获取代码题答案
   */
  showCodeAnswer(answer: Answer) {
    console.log('code ans is ', answer);
  }

  /**
   * 倒计时方法
   */
  resetTime(time: number) {
    let that = this;
    function countdown() {
      var s = time % 60;
      var m = Math.floor(time / 60) % 60;
      that.msg = `${(m < 10 ? '0' : '') + m}:${(s < 10 ? '0' : '') + s}`;
      if (--time > 0) {
        setTimeout(countdown, 1000);
      } else {
        // 交卷
        
      }
      console.log('time is ', that.msg);
    }

    countdown();
  }
}
