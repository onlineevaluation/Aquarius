import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { CodeEditorComponent } from './page/code-editor/code-editor.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
  { path: 'code', component: CodeEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
