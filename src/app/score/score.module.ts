import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScoreComponent } from './score.component';
import { SharedModule } from '../shared/shared.module';
import { ScoreService } from './score.service';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [ScoreComponent],
  imports: [CommonModule, ScoreRoutingModule, SharedModule, NgxEchartsModule],
  providers: [ScoreService],
})
export class ScoreModule {}
