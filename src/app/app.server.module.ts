import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BusinessConfigService } from './core/services/business-config/business-config.service';
import { switchMap } from 'rxjs';
import { handleObservable } from './core/utils/api';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

function initializeAppConfig(businessConfigService: BusinessConfigService) {
  return () => {
    handleObservable<{ data: any }>(
      businessConfigService
        .requestCookie()
        .pipe(switchMap(() => businessConfigService.getBusinessConfig())),
      {
        onAfterSuccess: (data) => {
          businessConfigService.$businessConfig.next(data.data);
        },
      },
    );
  };
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    //https://github.com/angular/flex-layout/wiki/Using-SSR-with-Flex-Layout
    FlexLayoutServerModule,
  ],
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
