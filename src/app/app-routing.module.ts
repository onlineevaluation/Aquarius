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
  {
    path: 'page/:pageId/:classId',
    loadChildren: './page/page.module#PageModule',
    canLoad: [CanLoginGuard],
  },
  {
    path: 'score',
    loadChildren: './score/score.module#ScoreModule',
    canLoad: [CanLoginGuard],
  },
  {
    path: 'pageDetails/:pageId',
    loadChildren: './page-details/page-details.module#PageDetailsModule',
    canLoad: [CanLoginGuard],
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  // 404 页面
  { path: '**', loadChildren: './code404/code404.module#Code404Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
