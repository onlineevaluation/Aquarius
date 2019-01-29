import { NgModule } from '@angular/core';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { MultipleChoiceComponent } from './page/multiple-choice/multiple-choice.component';
import { GapFillingComponent } from './page/gap-filling/gap-filling.component';
import { CodeEditorComponent } from './page/code-editor/code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { PageService } from './page.service';
import { SelectSheetComponent } from './page/multiple-choice/select-sheet/select-sheet.component';
import { MatBottomSheetModule } from '@angular/material';
import { MultipleChoiceService } from './page/multiple-choice/multiple-choice.service';

@NgModule({
  declarations: [
    PageComponent,
    MultipleChoiceComponent,
    GapFillingComponent,
    CodeEditorComponent,
    SelectSheetComponent,
  ],
  imports: [
    SharedModule,
    MatBottomSheetModule,
    PageRoutingModule,
    MonacoEditorModule.forRoot(),
  ],
  providers: [PageService, MultipleChoiceService],
  entryComponents: [SelectSheetComponent],
})
export class PageModule {}
