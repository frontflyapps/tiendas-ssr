import { NgModule } from '@angular/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { ServiceWorkerUpdateService } from './service-worker-update.service';

@NgModule({
  imports: [MatDialogModule],
  providers: [ServiceWorkerUpdateService],
})
export class UpdateControllerModule {
  constructor(private sws: ServiceWorkerUpdateService) {}
}
