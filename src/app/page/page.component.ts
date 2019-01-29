import { Component, OnInit } from '@angular/core';
import { Answer } from '../domain/Answer';
import { CodeProblem } from '../domain/CodeProblem';
import { ActivatedRoute, Params } from '@angular/router';
import { PageService } from './page.service';
import { Problem } from '../domain/Problem';
import { MultipleChoiceService } from './page/multiple-choice/multiple-choice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  public multipleChoices: Array<Problem> = [];

  public CodeProblems: Array<CodeProblem> = [
    new CodeProblem(1, '用c语言实现一个双向链表…………', '512kb', '5000ms'),
  ];

  public blankProblems: Array<Problem>;

  public answers: Array<Answer> = [];
  private pagesId: number;
  private classId: number;
  constructor(
    private router: ActivatedRoute,
    private pageService: PageService,
    private multipleService: MultipleChoiceService,
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.pagesId = params['pageId'];
      this.classId = params['classId'];
    });
    this.pageService.getProblem(this.classId, this.pagesId).subscribe(next => {
      this.multipleChoices = next.data.signChoice;
      this.blankProblems = next.data.blank;
    });
  }

  /**
   * 获取单选题答案
   * @param ans 单选题答案
   */
  showMultipleAnswer() {
    let list = this.multipleService.choiceList;
    console.log('list is ', list);
    // if (this.answers.length === 0) {
    //   this.answers.push(ans);
    // } else {
    //   let flag = false;
    //   for (let i = 0; i < this.answers.length; i++) {
    //     if (ans.id === this.answers[i].id) {
    //       this.answers.splice(i, 1, ans);
    //       flag = true;
    //     }
    //   }
    //   if (!flag) {
    //     this.answers.push(ans);
    //   }
    // }
  }

  showCodeAnswer(answer: Answer) {
    console.log('code ans is ', answer);
  }
}
