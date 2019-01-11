import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'exam', loadChildren: './exam/exam.module#ExamModule' },
  { path: 'page', loadChildren: './page/page.module#PageModule' },

  // 404 页面
  { path: '**', loadChildren: './code404/code404.module#Code404Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
