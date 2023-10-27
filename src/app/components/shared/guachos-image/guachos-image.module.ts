import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuachosImageComponent } from './guachos-image.component';
import { TranslateModule } from '@ngx-translate/core';

import { GuachosImagePickerModule } from 'guachos-image-picker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [GuachosImageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    GuachosImagePickerModule,
    GuachosImageComponent,
  ],
})
export class GuachosImageModule {}
