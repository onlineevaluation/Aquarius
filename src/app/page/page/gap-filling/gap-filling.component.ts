import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-gap-filling',
  templateUrl: './gap-filling.component.html',
  styleUrls: ['./gap-filling.component.scss']
})
export class GapFillingComponent implements OnInit {

  public blank = '这是一个 <input type="text" placeholder="填写正确答案" class="input-text" ' +
    'style="border-style: none none solid none;outline: none; width: 120px">  ';

  public trustedHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.trustedHtml = sanitizer.bypassSecurityTrustHtml(this.blank);
  }

  ngOnInit() {
  }

}
