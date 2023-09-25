import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogCaptchaComponent } from './dialog-captcha.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PipesModule } from '../../../core/pipes/pipes.module';
import { DialogCaptchaRoutingModule } from './dialog-captcha-routing.module';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';

@NgModule({
  declarations: [DialogCaptchaComponent],
  imports: [
    CommonModule,
    DialogCaptchaRoutingModule,
    FlexLayoutModule,
    TranslateModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatButtonToggleModule,
    PipesModule,
    MatProgressSpinnerModule,
  ],
  exports: [DialogCaptchaComponent],
})
export class DialogCaptchaModule {}
