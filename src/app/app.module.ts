import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './core/services/interceptors/token-interceptor.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UpdateControllerModule } from './components/shared/updates-controller/update-controller.module';
import { HttpLoaderFactory } from './core/services/translate-factory/translate-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'environments/environment';
import { HttpErrorInterceptorService } from './core/services/interceptors/http-error-interceptor.service';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import { HttpSSRLogInterceptorService } from './core/services/interceptors/http-ssr-log-interceptor.service';
import localeEs from '@angular/common/locales/es';
import { register as swiperRegister } from 'swiper/element/bundle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BusinessConfigService } from './core/services/business-config/business-config.service';
import { switchMap } from 'rxjs';
import { handleObservable } from './core/utils/api';

import {
  MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  MatAutocompleteModule,
} from '@angular/material/autocomplete';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';
import { GuachosGeneralAutocompleteModule } from 'guachos-general-autocomplete';

//https://swiperjs.com/element#install--register-from-npm
swiperRegister();
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    BrowserModule,
    UpdateControllerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    GuachosGeneralAutocompleteModule,
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
      provide: APP_INITIALIZER,
      useFactory: initializeAppConfig,
      deps: [BusinessConfigService],
      multi: true,
    },
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
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpSSRLogInterceptorService,
    //   multi: true,
    // },
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
    CurrencyPipe,
    Meta,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

function initializeAppConfig(appService: BusinessConfigService) {
  return () =>
    new Promise<void>((resolve) => {
      handleObservable<{ data: any }>(
        appService.requestCookie().pipe(switchMap(() => appService.getBusinessConfig())),
        {
          onAfterSuccess: (data) => {
            appService.businessConfig = data;
            console.log('<<<<<<<<businessConfig>>>>>>>>', appService.businessConfig);
            resolve();
          },
        },
      );
    });
}
