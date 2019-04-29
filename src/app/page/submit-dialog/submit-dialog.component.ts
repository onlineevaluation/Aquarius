import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PageService } from '../page.service';

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
  }

  onSubmit() {
    const pageId = this.data.pageId;
    const choiceAns = this.data.choiceCard;
    const gapFillAns = this.data.gapFillCard;
    const questionAns = this.data.questionCard;
    const algorithmAns = this.data.algorithmCard;

    this.pageService
      .submitPage(pageId, choiceAns, gapFillAns, questionAns, algorithmAns)
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
