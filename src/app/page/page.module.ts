import { NgModule } from '@angular/core';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { MultipleChoiceComponent } from './page/multiple-choice/multiple-choice.component';
import { GapFillingComponent } from './page/gap-filling/gap-filling.component';
import { CodeEditorComponent } from './page/code-editor/code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { PageService } from './page.service';

@NgModule({
  declarations: [
    PageComponent,
    MultipleChoiceComponent,
    GapFillingComponent,
    CodeEditorComponent,
  ],
  imports: [SharedModule, PageRoutingModule, MonacoEditorModule.forRoot()],
  providers:[PageService]
})
export class PageModule {}
