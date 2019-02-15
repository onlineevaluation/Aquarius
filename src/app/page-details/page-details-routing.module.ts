import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDetailsComponent } from './page-details.component';

const routes: Routes = [
  {
    path: '',
    component: PageDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDetailsRoutingModule {}
