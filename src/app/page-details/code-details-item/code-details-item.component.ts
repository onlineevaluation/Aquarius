import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-code-details-item',
  templateUrl: './code-details-item.component.html',
  styleUrls: ['./code-details-item.component.scss'],
})
export class CodeDetailsItemComponent implements OnInit {
  @Input() item: any;
  editor: any;
  public options = {
    language: 'c',
    theme: 'vs',
  };
  @Input() codeItem: any;
  // 学生答案
  public originalModel: any;
  // 标准答案
  public modifiedModel: any;
  constructor() {}

  ngOnInit() {
    this.originalModel = {
      language: 'c',
      code: this.item.answer,
    };
    this.modifiedModel = {
      language: 'c',
      code: this.item.standardAnswer,
    };
  }
}
