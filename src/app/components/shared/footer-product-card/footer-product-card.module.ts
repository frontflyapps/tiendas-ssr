import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterProductCardComponent } from './footer-product-card/footer-product-card.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { PipesModule } from '../../../core/pipes/pipes.module';
import { GuachosRatingModule } from 'guachos-rating';
import { DebounceClickModule } from 'src/app/core/directives/debounce-click/debounce-click.module';

@NgModule({
  declarations: [FooterProductCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FlexModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    PipesModule,
    GuachosRatingModule,
    DebounceClickModule,
  ],
  exports: [FooterProductCardComponent],
})
export class FooterProductCardModule {}
