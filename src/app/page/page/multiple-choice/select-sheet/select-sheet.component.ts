import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatRadioChange,
} from '@angular/material';
import { Observable } from 'rxjs';
import { MultipleChoiceService } from '../multiple-choice.service';

@Component({
  selector: 'app-select-sheet',
  templateUrl: './select-sheet.component.html',
  styleUrls: ['./select-sheet.component.scss'],
})
export class SelectSheetComponent implements OnInit {
  public check_A: boolean = false;
  public check_B: boolean = false;
  public check_C: boolean = false;
  public check_D: boolean = false;

  @Output() public studentAnswer = new EventEmitter<Observable<any>>();
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private multipleService: MultipleChoiceService,
  ) {}

  ngOnInit() {
    switch (this.data.studentChoice.choiced) {
      case 'A':
        this.check_A = true;
        break;
      case 'B':
        this.check_B = true;
        break;
      case 'C':
        this.check_C = true;
        break;
      case 'D':
        this.check_D = true;
        break;
    }
  }

  selectChoice(titleNumber: number, e: MatRadioChange) {
    this.multipleService.setStudent(titleNumber, e.value);
  }
}
