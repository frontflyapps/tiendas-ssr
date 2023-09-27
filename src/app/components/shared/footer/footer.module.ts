import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    MatSelectModule,
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatTooltipModule,
  ],
})
export class FooterModule {}
