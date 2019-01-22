import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, LoginRoutingModule],
  exports: [LoginRoutingModule],
})
export class LoginModule {}
