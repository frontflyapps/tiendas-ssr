import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import path from 'path';
import fs from 'fs';
/**
 * there is an issue optimizing the code to production with webpack (https://github.com/fgnass/domino/issues/146)
 * the solution for now is use domino-ext (https://www.npmjs.com/package/domino-ext) instead domino
 */
// @ts-expect-error not matter(temporally)
import domino from 'domino-ext';

const initDOM = () => {
  // Use the browser index.html as template for the mock window
  const template = fs
    .readFileSync(path.join(process.cwd(), `dist/browser`, 'index.html'))
    .toString();

  // Shim for the global window and document objects.
  const window = domino.createWindow(template);

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
