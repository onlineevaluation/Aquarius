import { NgModule } from '@angular/core';

import { PageDetailsRoutingModule } from './page-details-routing.module';
import { PageDetailsComponent } from './page-details.component';
import { PageDetailsService } from './page-details.service';
import { SharedModule } from '../shared/shared.module';
import { DetailsItemComponent } from './details-item/details-item.component';
import { ReportComponent } from './report/report.component';
import { MatDialogModule } from '@angular/material';
import { CodeDetailsItemComponent } from './code-details-item/code-details-item.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
@NgModule({
  declarations: [
    PageDetailsComponent,
    DetailsItemComponent,
    ReportComponent,
    CodeDetailsItemComponent,
  ],
  imports: [
    PageDetailsRoutingModule,
    SharedModule,
    MatDialogModule,
    MonacoEditorModule.forRoot(),
  ],
  providers: [PageDetailsService],
  entryComponents: [ReportComponent],
})
export class PageDetailsModule {}
