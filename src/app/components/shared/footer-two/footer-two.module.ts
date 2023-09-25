import { RouterModule } from '@angular/router';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FooterTwoComponent } from './footer-two.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
  declarations: [FooterTwoComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    TranslateModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [FooterTwoComponent],
})
export class FooterTwoModule {}
