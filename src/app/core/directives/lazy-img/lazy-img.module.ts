import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyImgDirective } from './lazy-img.directive';

@NgModule({
  exports: [LazyImgDirective],
  imports: [CommonModule, LazyImgDirective],
})
export class LazyImgModule {}
