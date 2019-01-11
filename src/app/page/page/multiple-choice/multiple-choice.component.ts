import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MultipleChoice} from '../../../domain/MultipleChoice';
import {MatRadioChange} from '@angular/material';
import {Answer} from '../../../domain/Answer';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() multipleChoice: MultipleChoice;
  @Output() public answered = new EventEmitter<Answer>();

  constructor() {
  }

  ngOnInit() {
  }

  getChoice(e: MatRadioChange, id: number) {
    // console.log('e is ', e.value, id);
    const ans = new Answer();
    ans.id = id;
    ans.answer = e.value;
    this.answered.emit(ans);
  }
}
