import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CodeProblem } from '../../../domain/CodeProblem';
import { Answer } from '../../../domain/Answer';
import { StudentAns } from 'src/app/domain/StudentAns';
import { Problem } from 'src/app/domain/Problem';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit {
  @Input() problem: Problem;
  @Input() index: number;
  @Output() public answered = new EventEmitter<StudentAns>();
  languages: Array<string> = ['java', 'c'];
  themes: Array<string> = ['vs', 'vs-dark'];
  public code: any;
  selectedLan = 'c';
  selectedTheme = 'vs';
  public editorOptions: any;

  constructor() {}

  ngOnInit() {
    this.code =
      '#include <stdio.h>\n\nint main() {\n  // write your code\n  return 0;\n} ';
    this.editorOptions = {
      theme: this.selectedTheme,
      language: this.selectedLan,
    };
  }
  /**
   * 改变语言
   * @param language 选择的语言
   */
  languageChange(language: string) {
    this.selectedLan = language;
    this.editorOptions = {
      theme: this.selectedTheme,
      language: this.selectedLan,
    };
    if (this.selectedLan === 'c') {
      this.code =
        '#include <stdio.h>\n\nint main() {\n  // write your code\n  return 0;\n}  ';
    } else {
      this.code =
        'public class Example {\n  public staitc void main(String[] args) {\n  // wirte your code\n  }\n}\n ';
    }
  }

  /**
   * 改变主题
   * @param theme 选择的主题
   */
  themeChange(theme: string) {
    this.selectedTheme = theme;
    this.editorOptions = {
      theme: this.selectedTheme,
      language: this.selectedLan,
    };
  }

  /**
   * 提交代码到服务器上
   */
  submitCode() {
    const ans = new StudentAns();
    ans.problemId = this.problem.id;
    ans.ans = this.code;
    this.answered.emit(ans);
  }
}
