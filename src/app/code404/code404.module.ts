import { NgModule } from '@angular/core';

import { Code404RoutingModule } from './code404-routing.module';
import { Code404Component } from './code404/code404.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Code404Component],
  imports: [SharedModule, Code404RoutingModule],
})
export class Code404Module {}
