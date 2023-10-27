import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceClickDirective } from './debounce-click.directive';

@NgModule({
  exports: [DebounceClickDirective],
  imports: [CommonModule, DebounceClickDirective],
})
export class DebounceClickModule {}
