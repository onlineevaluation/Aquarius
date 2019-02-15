import { NgModule } from '@angular/core';

import { PageDetailsRoutingModule } from './page-details-routing.module';
import { PageDetailsComponent } from './page-details.component';
import { PageDetailsService } from './page-details.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageDetailsComponent],
  imports: [PageDetailsRoutingModule, SharedModule],
  providers: [PageDetailsService],
})
export class PageDetailsModule {}
