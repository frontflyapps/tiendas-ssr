import { Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cookieService: SsrCookieService) {}

  // -----------LONG---------------
  longDataStorage: Record<string, string> = {};

  private getItemLong(key: string): string | undefined {
    return this.longDataStorage[key];
  }

  private setItemLong(key: string, value: any): void {
    console.warn(`"${key}" was saved in longDataStorage`);
    this.longDataStorage[key] = value;
  }

  private isValueLong(value: string): boolean {
    return value.length > 4000;
  }

  private checkLong(key: string): boolean {
    return key in this.longDataStorage;
  }

  private removeItemLong(key: string): void {
    delete this.longDataStorage[key];
  }

  // -------------------------------

  clear(): void {
    console.log('clear was called');
  }

  getItem(key: string): string | null {
    if (!key) return null;

    const value = this.checkLong(key) ? this.getItemLong(key) : this.cookieService.get(key);
    // return JSON.parse(value) || null;
    return value || null;
  }

  check(key: string): boolean {
    return key in this.longDataStorage || this.cookieService.check(key);
  }

  removeItem(key: string): void {
    console.warn(`removing item ${key}`);
    if (this.checkLong(key)) {
      this.removeItemLong(key);
    } else {
      this.cookieService.delete(key);
    }
  }

  setItem(key: string, value: any): void {
    if (!value || !key) {
      return;
    }

    if (typeof value !== 'string') {
      console.warn('the value shoud be string');
      return;
    }

    if (this.isValueLong(value)) {
      // something abount cookies length (https://support.convert.com/hc/en-us/articles/4511582623117-Cookie-size-limits-and-the-impact-on-the-use-of-Convert-goals)
      this.setItemLong(key, value);
    } else {
      // this.cookieService.set(key, JSON.stringify(value));
      this.cookieService.set(key, value);
    }
  }
}
