import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScoreComponent } from './score.component';
import { SharedModule } from '../shared/shared.module';
import { ScoreService } from './score.service';

@NgModule({
  declarations: [ScoreComponent],
  imports: [CommonModule, ScoreRoutingModule, SharedModule],
  providers: [ScoreService],
})
export class ScoreModule {}
