import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {loadSvgResource} from '../utils/svg.util';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              ir: MatIconRegistry,
              ds: DomSanitizer) {
    if (parent) {
      throw new Error('已经存在core module');
    }
    loadSvgResource(ir, ds);
  }
}
