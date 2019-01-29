import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoginGuard } from './provide/CanLoginProvide';
import { TestComponent } from './test/test.component';

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
  },
  { path: 'test' , component: TestComponent},
  // 404 页面
  { path: '**', loadChildren: './code404/code404.module#Code404Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
