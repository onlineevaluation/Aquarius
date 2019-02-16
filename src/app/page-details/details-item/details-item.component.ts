import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.scss'],
})
export class DetailsItemComponent implements OnInit {
  colors: string = 'Warn';
  @Input() item: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  doCollect() {
    if (this.colors === 'warn') {
      this.colors = 'Primary';
    } else {
      this.colors = 'Warn';
    }
  }
  report() {
    this.dialog.open(ReportComponent, { data: { problem: this.item } });
  }
}
