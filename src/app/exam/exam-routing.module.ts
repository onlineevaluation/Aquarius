import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExamListComponent} from './exam-list/exam-list.component';

const routes: Routes = [
  {path: '', component: ExamListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule {
}
