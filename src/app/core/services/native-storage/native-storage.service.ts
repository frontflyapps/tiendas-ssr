import { Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class NativeStorageService {
  constructor(private cookieService: SsrCookieService) {}

  clear(): void {
    console.log('clear was called');
  }

  getItem(key: string): string | null {
    return this.cookieService.get(key) || null;
  }

  has(key: string): boolean {
    return this.cookieService.check(key);
  }

  removeItem(key: string): void {
    this.cookieService.delete(key);
  }

  setItem(key: string, value: any): void {
    if (typeof value !== 'string') {
      console.error('should save a right value as string'); // TODO remove this comment and check the types
      return;
    }

    this.cookieService.set(key, value);
  }
}
