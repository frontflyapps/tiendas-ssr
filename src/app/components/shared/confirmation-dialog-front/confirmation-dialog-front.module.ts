import { ConfirmationDialogFrontComponent } from './confirmation-dialog-front.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule,
    ConfirmationDialogFrontComponent,
  ],
  exports: [ConfirmationDialogFrontComponent],
})
export class ConfirmationDialogFrontModule {}
