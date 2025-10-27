import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ModalModule } from 'ngx-bootstrap/modal';
import { importProvidersFrom } from '@angular/core';

  bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
      provideRouter(routes),
      importProvidersFrom(ModalModule.forRoot())

  ]
});