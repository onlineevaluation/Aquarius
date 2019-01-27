import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtModule } from '@auth0/angular-jwt';
import { CanLoginGuard } from './provide/CanLoginProvide';

import * as Sentry from '@sentry/browser';
import { authInfo } from './utils/auth.util';

export function tokenGetter() {
  return localStorage.getItem('token');
}

Sentry.init({
  dsn: 'https://bdbd5652f73943adada0324c1dd9f8a0@sentry.io/1378315',
  release: '1.0.0-dev',
});

Sentry.configureScope(scope => {
  scope.setUser({ id: `${authInfo().userId}` });
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [],
        blacklistedRoutes: [],
      },
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [
    CanLoginGuard,
    { provide: ErrorHandler, useClass: SentryErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
