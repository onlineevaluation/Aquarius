import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { Code404Component } from './code404/code404.component'

const routes: Routes = [{ path: '', component: Code404Component }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Code404RoutingModule {}
