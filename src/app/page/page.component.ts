import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Answer } from '../domain/Answer';
import { CodeProblem } from '../domain/CodeProblem';
import { Problem } from '../domain/Problem';
import { StudentAns } from '../domain/StudentAns';
import { PageService } from './page.service';
import { MultipleChoiceService } from './page/multiple-choice/multiple-choice.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';

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
   * 填空题数据
   */
  public blankProblems: Array<Problem> = [];
  /**
   * 简答题数据
   */
  public questionAndAnswers: Array<Problem> = [];
  /**
   * 算法试题
   */
  public algorithmAnswer: Array<Problem> = [];

  /**
   * 选择题答题卡数据
   */
  public multipleChoicesCard: Array<StudentAns> = [];

  /**
   * 简答题答题卡
   */
  public questionCard: Array<StudentAns> = [];
  /**
   * 填空题答题卡数据
   */
  public gapFillingCard: Array<StudentAns> = [];
  /**
   * 算法题
   * todo()
   */
  public algorithmCard: Array<StudentAns> = [];
  public CodeProblems: Array<CodeProblem> = [
    new CodeProblem(1, '用c语言实现一个双向链表…………', '512kb', '5000ms'),
  ];
  public msg: string = '时分秒';
  /**
   * 倒计时时间
   */
  private time = 3600000;

  public answers: Array<Answer> = [];
  private pagesId: number;
  private classId: number;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private pageService: PageService,
    private matDialog: MatDialog,
    public multipleService: MultipleChoiceService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe((params: Params) => {
      this.pagesId = params['pageId'];
      this.classId = params['classId'];
    });

    this.pageService.getProblem(this.classId, this.pagesId).subscribe(next => {
      this.multipleChoices = next.data.signChoice;
      this.blankProblems = next.data.blank;
      this.questionAndAnswers = next.data.ansQuestion;
      this.algorithmAnswer = next.data.algorithm;
      this.multipleChoicesCard.length = this.multipleChoices.length;
      this.gapFillingCard.length = this.blankProblems.length;
      this.questionCard.length = this.questionAndAnswers.length;
      this.algorithmCard.length = this.algorithmAnswer.length;
      console.log('算法试题', this.algorithmAnswer);
      for (let i = 0; i < this.multipleChoicesCard.length; i++) {
        const studentAns = new StudentAns();
        // 题号是从1题开始的
        studentAns.titleNumber = i + 1;
        studentAns.ans = '';
        this.multipleChoicesCard[i] = studentAns;
      }
      for (let i = 0; i < this.gapFillingCard.length; i++) {
        const studentAns = new StudentAns();
        // 题号是从1题开始的
        studentAns.titleNumber = i + 1;
        studentAns.ans = '';
        this.gapFillingCard[i] = studentAns;
      }

      for (let i = 0; i < this.questionAndAnswers.length; i++) {
        const studentAns = new StudentAns();
        // 题号是从1题开始的
        studentAns.titleNumber = i + 1;
        studentAns.ans = '';
        this.questionCard[i] = studentAns;
      }

      for (let i = 0; i < this.CodeProblems.length; i++) {
        const studentAns = new StudentAns();
        // 题号是从1题开始的
        studentAns.titleNumber = i + 1;
        studentAns.ans = '';
        this.algorithmCard[i] = studentAns;
      }
    });

    this.resetTime(this.time);
  }

  /**
   * 获取单选题答案
   */
  showMultipleAnswer(ans: StudentAns) {
    if (ans !== undefined) {
      for (let i = 0; i < this.multipleChoicesCard.length; i++) {
        if (ans.titleNumber === this.multipleChoicesCard[i].titleNumber) {
          this.multipleChoicesCard.splice(i, 1, ans);
        }
      }
    }
  }

  /**
   *
   * @param answer 获取代码题答案
   */
  showCodeAnswer(ans: StudentAns) {
    for (let i = 0; i < this.algorithmCard.length; i++) {
      if (this.algorithmCard[i].titleNumber === 1) {
        this.algorithmCard.splice(i, 1, ans);
      }

      let flag = false;
      if (ans.titleNumber === this.algorithmCard[i].titleNumber) {
        this.algorithmCard.splice(i, 1, ans);
        flag = true;
      }
      if (!flag) {
        this.algorithmCard.push(ans);
      }
      break;
    }
  }

  /**
   * 获取填空题答案
   * @param studentAns 填空题答案
   */
  showGapFillingAnswer(ans: StudentAns) {
    if (ans !== undefined) {
      for (let i = 0; i < this.gapFillingCard.length; i++) {
        if (ans.titleNumber === this.gapFillingCard[i].titleNumber) {
          this.gapFillingCard.splice(i, 1, ans);
        }
      }
    }
  }
  /**
   *
   * @param ans 简答题答案
   */
  showQuestionAnswer(ans: StudentAns) {
    if (ans !== undefined) {
      for (let i = 0; i < this.questionCard.length; i++) {
        if (ans.titleNumber === this.questionCard[i].titleNumber) {
          this.questionCard.splice(i, 1, ans);
        }
      }
    }
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
        that.submitAns();
      }
    }
    countdown();
  }

  /**
   * 提交答案
   */
  submitAns() {
    // 提示框
    const ref = this.matDialog.open(SubmitDialogComponent, {
      data: {
        time: this.msg,
        pageId: this.pagesId,
        choiceCard: this.multipleChoicesCard,
        gapFillCard: this.gapFillingCard,
        questionCard: this.questionCard,
        algorithmCard: this.algorithmCard,
      },
    });
    ref.afterClosed().subscribe(
      next => {
        switch (next.msg) {
          case '':
            break;
          case 'success':
            // 路由跳转
            this.router.navigateByUrl('/score');
            break;
          default:
            this.snackBar.open(next.msg, '关闭', {
              duration: 2000,
            });
            // 错误信息
            break;
        }
      },
      error => {
        console.log('error', error);
      },
    );
  }
}
