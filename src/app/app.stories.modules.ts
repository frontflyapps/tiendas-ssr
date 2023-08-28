import { LOCALE_ID, NgModule, importProvidersFrom } from '@angular/core';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { Meta as StoryMeta } from '@storybook/angular';

import { PipesModule } from './core/pipes/pipes.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './core/services/interceptors/token-interceptor.service';
import { HttpErrorInterceptorService } from './core/services/interceptors/http-error-interceptor.service';
import { HttpSSRLogInterceptorService } from './core/services/interceptors/http-ssr-log-interceptor.service';
import { CurrencyPipe } from '@angular/common';
import { Meta, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UpdateControllerModule } from './components/shared/updates-controller/update-controller.module';
import { HttpLoaderFactory } from './core/services/translate-factory/translate-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'environments/environment';
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
})
export class StoriesRoutingModule {}

@NgModule({
  imports: [
    NgxSpinnerModule,
    UpdateControllerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CoreModule,
    MatDialogModule,
    ToastrModule.forRoot(), // ToastrModule added
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpSSRLogInterceptorService,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
    CurrencyPipe,
    Meta,
  ],
})
export class StoriesModule {}

export const storiesDecorators: StoryMeta['decorators'] = [
  applicationConfig({
    providers: [importProvidersFrom(StoriesRoutingModule), importProvidersFrom(StoriesModule)],
  }),
  moduleMetadata({
    imports: [StoriesModule, TranslateModule, PipesModule],
  }),
];
