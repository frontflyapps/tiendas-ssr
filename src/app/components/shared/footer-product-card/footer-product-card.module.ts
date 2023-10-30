import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterProductCardComponent } from './footer-product-card/footer-product-card.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PipesModule } from '../../../core/pipes/pipes.module';
import { GuajiritosRating } from '@guajiritos/rating';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    PipesModule,
    GuajiritosRating,
    FooterProductCardComponent,
  ],
  exports: [FooterProductCardComponent],
})
export class FooterProductCardModule {}
