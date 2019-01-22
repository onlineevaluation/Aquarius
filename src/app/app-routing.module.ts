import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoginGuard } from './provide/CanLoginProvide';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: '',
    loadChildren: './exam/exam.module#ExamModule',
    canLoad: [CanLoginGuard],
  },
  { path: 'page', loadChildren: './page/page.module#PageModule' },

  // 404 页面
  { path: '**', loadChildren: './code404/code404.module#Code404Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
