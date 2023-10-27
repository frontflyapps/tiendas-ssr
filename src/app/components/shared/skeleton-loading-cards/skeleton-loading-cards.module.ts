import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatCardModule } from '@angular/material/card';
import { SkeletonLoadingCardsComponent } from './skeleton-loading-cards.component';

@NgModule({
  imports: [CommonModule, NgxSkeletonLoaderModule, MatCardModule, SkeletonLoadingCardsComponent],
  exports: [NgxSkeletonLoaderModule, SkeletonLoadingCardsComponent],
})
export class SkeletonLoadingCardsModule {}
