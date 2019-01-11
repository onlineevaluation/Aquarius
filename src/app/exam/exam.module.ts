import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExamRoutingModule} from './exam-routing.module';
import {ExamListComponent} from './exam-list/exam-list.component';
import {ExamItemComponent} from './exam-item/exam-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ExamListComponent, ExamItemComponent],
  imports: [
    CommonModule,
    ExamRoutingModule,
    SharedModule
  ]
})
export class ExamModule {
}
