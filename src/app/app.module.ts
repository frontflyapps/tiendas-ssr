import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './core/services/interceptors/token-interceptor.service';
import { BusinessConfigService } from './core/services/business-config/business-config.service';
import { lastValueFrom, switchMap } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TranslateModule.forRoot()],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptorService,
    //   multi: true,
    // },
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
    // CurrencyPipe,
    // Meta,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
