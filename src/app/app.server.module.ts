import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BusinessConfigService } from './core/services/business-config/business-config.service';
import { lastValueFrom, switchMap } from 'rxjs';

function initializeAppConfig(businessConfigService: BusinessConfigService) {
  return () => {
    lastValueFrom(
      businessConfigService
        .requestCookie()
        .pipe(switchMap(() => businessConfigService.getBusinessConfig()))
    ).then((data) => {
      businessConfigService.$businessConfig.next(data.data);
    });
  };
}

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppConfig,
      deps: [BusinessConfigService],
      multi: true,
    },
  ],
})
export class AppServerModule {}
