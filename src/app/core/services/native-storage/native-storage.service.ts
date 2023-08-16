import { Injectable } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number = 0;
  clear(): void {}
  getItem(key: string): string | null {
    return null;
  }
  key(index: number): string | null {
    return null;
  }
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}

@Injectable({
  providedIn: 'root',
})
export class NativeStorageService implements Storage {
  private storage: Storage;

  constructor() {
    this.storage = new LocalStorage();

    AppComponent.isBrowser.subscribe((isBrowser) => {
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

  getItem(key: string): string {
    return this.storage.getItem(key) || ''; // TODO fix this type issue. Should not return ''. Should be return null instad
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
