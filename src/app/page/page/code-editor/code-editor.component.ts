import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import {CodeProblem} from '../../../domain/CodeProblem';
import {Answer} from '../../../domain/Answer';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

  @Input() problem: CodeProblem;
  @Output() public answered = new EventEmitter<Answer>();
  languages: Array<string> = ['java', 'c'];
  themes: Array<string> = ['vs', 'vs-dark'];
  public code: any;
  selectedLan = 'c';
  selectedTheme = 'vs';
  public editorOptions:any;

  constructor() {

  }

  ngOnInit() {
    this.code = '#include <stdio.h>\n\nint main() {\n  // write your code\n  return 0;\n} ';
    this.editorOptions = {theme: this.selectedTheme, language: this.selectedLan};
  }
// 1/V1ixbJDC1fWUKGHDLz0quj9nsx8ovrJEOgre29hpdd4
  /**
   * 改变语言
   * @param language 选择的语言
   */
  languageChange(language: string) {
    this.selectedLan = language;
    this.editorOptions = {theme: this.selectedTheme, language: this.selectedLan};
    if (this.selectedLan === 'c') {
      this.code = '#include <stdio.h>\n\nint main() {\n  // write your code\n  return 0;\n}  ';
    } else {
      this.code = 'public class Example {\n  public staitc void main(String[] args) {\n  // wirte your code\n  }\n}\n ';
    }
  }

  /**
   * 改变主题
   * @param theme 选择的主题
   */
  themeChange(theme: string) {
    this.selectedTheme = theme;
    this.editorOptions = {theme: this.selectedTheme, language: this.selectedLan};
  }

  /**
   * 提交代码到服务器上
   */
  submitCode() {
    console.log('code is ', this.code);
    const ans = new Answer();
    ans.id = this.problem.id;
    ans.answer = this.code;
    this.answered.emit(ans);
  }
}
