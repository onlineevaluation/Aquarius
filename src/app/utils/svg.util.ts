import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


export const loadSvgResource = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('home', ds.bypassSecurityTrustResourceUrl('assets/home.svg'));
};
