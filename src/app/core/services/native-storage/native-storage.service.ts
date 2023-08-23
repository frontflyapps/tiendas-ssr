import { Injectable } from '@angular/core';
import { PlatformService } from '../platform/platform.service';

class LocalStorage implements Storage {
  [name: string]: any;

  private data: { [key: string]: string } = {};

  get length(): number {
    return Object.keys(this.data).length;
  }

  clear(): void {
    this.data = {};
  }
  getItem(key: string): string | null {
    return key in this.data ? this.data[key] : null;
  }
  key(index: number): string | null {
    const keys = Object.keys(this.data);
    return index >= 0 && keys.length < index ? keys[index] : null;
  }
  removeItem(key: string): void {
    delete this.data[key];
  }
  setItem(key: string, value: string): void {
    this.data[key] = value;
  }
}

@Injectable({
  providedIn: 'root',
})
export class NativeStorageService implements Storage {
  private storage: Storage;

  constructor(public platformService: PlatformService) {
    this.storage = new LocalStorage();

    this.platformService.isBrowser.subscribe((isBrowser) => {
      if (isBrowser) {
        this.storage = localStorage;
      }
    });
  }

  [name: string]: any;

  length = 0;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: any): void {
    if (typeof value !== 'string') {
      console.error('should save a right value as string'); // TODO remove this comment and check the types
      return;
    }

    return this.storage.setItem(key, value);
  }
}
