import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lazyImg]',
  standalone: true,
})
export class LazyImgDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
