import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PageService } from '../page.service';
import { Result } from 'src/app/domain/Result';

@Component({
  selector: 'app-submit-dialog',
  templateUrl: './submit-dialog.component.html',
  styleUrls: ['./submit-dialog.component.scss'],
})
export class SubmitDialogComponent implements OnInit {
  time = 0;
  constructor(
    public dialogRef: MatDialogRef<SubmitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pageService: PageService,
  ) {}

  ngOnInit() {
    this.time = this.data.time;
    console.log('this time', this.time);
  }

  onSubmit() {
    const pageId = this.data.pageId;
    const choiceAns = this.data.choiceCard;
    const gapFillAns = this.data.gapFillCard;
    const questionAns = this.data.questionCard;
    this.pageService
      .submitPage(pageId, choiceAns, gapFillAns, questionAns)
      .subscribe(
        next => {
          this.dialogRef.close({ msg: 'success' });
        },
        error => {
          this.dialogRef.close({ msg: error.error.message });
        },
      );
  }

  onNoClick() {
    this.dialogRef.close({ msg: '' });
  }
}
