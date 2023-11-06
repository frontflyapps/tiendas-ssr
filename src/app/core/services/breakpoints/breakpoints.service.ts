import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

/**
 * Same media query values as guajiritos/flex-layout
 */
const MediaQ = {
  xs: '(max-width: 575.98px)',
  sm: '(max-width: 767.98px)',
  md: '(max-width: 991.98px)',
  lg: '(max-width: 1199.98px)',
  xl: '(max-width: 1399.98px)',
};

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  current: {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
  } = {
    lg: false,
    xl: false,
    md: false,
    sm: false,
    xs: false,
  };
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(Object.values(MediaQ)).subscribe((data) => {
      this.current = {
        lg: data.breakpoints[MediaQ.lg],
        xl: data.breakpoints[MediaQ.xl],
        md: data.breakpoints[MediaQ.md],
        sm: data.breakpoints[MediaQ.sm],
        xs: data.breakpoints[MediaQ.xs],
      };
    });
  }
}
