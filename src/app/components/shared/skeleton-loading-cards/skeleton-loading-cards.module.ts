import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatCardModule } from '@angular/material/card';
import { SkeletonLoadingCardsComponent } from './skeleton-loading-cards.component';

@NgModule({
  declarations: [SkeletonLoadingCardsComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule, MatCardModule],
  exports: [NgxSkeletonLoaderModule, SkeletonLoadingCardsComponent],
})
export class SkeletonLoadingCardsModule {}
