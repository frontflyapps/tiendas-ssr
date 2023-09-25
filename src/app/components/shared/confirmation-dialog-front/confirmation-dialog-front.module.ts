import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmationDialogFrontComponent } from './confirmation-dialog-front.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ConfirmationDialogFrontComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, TranslateModule, FlexLayoutModule],
  exports: [ConfirmationDialogFrontComponent],
})
export class ConfirmationDialogFrontModule {}
