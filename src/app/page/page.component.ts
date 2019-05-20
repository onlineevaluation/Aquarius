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
import { Profile } from '../domain/Profile';
import { StudentPageInfo } from '../domain/StudentPageInfo';

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
  public CodeProblems: Array<CodeProblem> = [];
  public msg: string = '时分秒';
  /**
   * 倒计时时间
   * 1000 * 60 * 60 * 2
   */
  private time = 7200000;
  private doTime = 0;

  public answers: Array<Answer> = [];
  private pagesId: number;
  private classId: number;
  public studentPageInfo: StudentPageInfo = new StudentPageInfo();
  private pageAndClassId: number;
  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private pageService: PageService,
    private matDialog: MatDialog,
    public multipleService: MultipleChoiceService,
    private snackBar: MatSnackBar,
  ) {}
  studentName: string;
  ngOnInit() {
    var profileJson = localStorage.getItem('profile');
    const profile: Profile = JSON.parse(profileJson);
    this.studentName = profile.name;
    this.activateRouter.params.subscribe((params: Params) => {
      this.pagesId = params['pageId'];
      this.classId = params['classId'];
      this.pageAndClassId = params['pageAndClassId'];
    });

    this.pageService.getProblem(this.pageAndClassId).subscribe(
      next => {
        // this.studentPageInfo = new StudentPageInfo();
        this.studentPageInfo = next.data.studentPageInfo;
        this.multipleChoices = next.data.signChoice;
        this.blankProblems = next.data.blank;
        this.questionAndAnswers = next.data.ansQuestion;
        this.algorithmAnswer = next.data.algorithm;
        this.multipleChoicesCard.length = this.multipleChoices.length;
        this.gapFillingCard.length = this.blankProblems.length;
        this.questionCard.length = this.questionAndAnswers.length;
        this.algorithmCard.length = this.algorithmAnswer.length;
        this.time = this.studentPageInfo.needTime;
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

        for (let i = 0; i < this.algorithmCard.length; i++) {
          const studentAns = new StudentAns();
          // 题号是从1题开始的
          studentAns.titleNumber = i + 1;
          studentAns.ans = '';
          this.algorithmCard[i] = studentAns;
        }
      },

      (error: Error) => {
        this.router.navigateByUrl('/');
      },
      () => {
        this.resetTime(this.time);
      },
    );
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
   * @param answer 获取代码题答案 这个是算法题
   */
  showCodeAnswer(ans: StudentAns) {
    console.log('al', ans);
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
    console.log('al', this.algorithmCard);
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
      var h = Math.floor(time / 3600000);
      that.msg = `${h}:${(m < 10 ? '0' : '') + m}:${(s < 10 ? '0' : '') + s}`;
      if (--time > 0) {
        that.doTime++;
        setTimeout(countdown, 1000);
      } else {
        // 交卷
        // this._time;
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
        doTime: this.doTime,
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
