import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import path from 'path';
import fs from 'fs';
import domino from 'domino';
import { environment } from 'environments/environment';

const initDOM = () => {
  // Use the browser index.html as template for the mock window
  const template = fs
    .readFileSync(path.join(process.cwd(), `dist/${environment.appName}/browser`, 'index.html'))
    .toString();

  // Shim for the global window and document objects.
  const window = domino.createWindow(template);

  // @ts-expect-error global is ready only
  global['window'] = window;
  global['document'] = window.document;
};

const initializeAppConfig = () => {
  return () => {
    initDOM();
  };
};

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    //https://github.com/angular/flex-layout/wiki/Using-SSR-with-Flex-Layout
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppConfig,
      multi: true,
    },
  ],
})
export class AppServerModule {}
