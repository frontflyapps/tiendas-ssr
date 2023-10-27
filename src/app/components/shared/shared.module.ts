import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviousRouteService } from '../../core/services/previous-route/previous-route.service';
import { DialogCaptchaModule } from './dialog-captcha/dialog-captcha.module';
import { DialogUploadMediaComponent } from './dialog-upload-media/dialog-upload-media.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogPhoneComponent } from './dialog-phone/dialog-phone.component';
import { GuachosGeneralAutocompleteModule } from 'guachos-general-autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    TranslateModule,
    DialogCaptchaModule,
    MatToolbarModule,
    GuachosGeneralAutocompleteModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    OrderByPipe,
    DialogUploadMediaComponent,
    DialogPhoneComponent,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TranslateModule,
    DialogCaptchaModule,
    DialogUploadMediaComponent,
  ],
  providers: [PreviousRouteService],
})
export class SharedModule {}
