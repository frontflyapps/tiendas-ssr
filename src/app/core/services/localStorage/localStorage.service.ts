import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NativeStorageService } from '../native-storage/native-storage.service';
import { environment } from 'environments/environment';

export const ReLoggedTime = environment.timeToResetSession; // Time in (ms), Time to reload data and clear localStorage
export interface IVersionSystem {
  version: string;
  timespan: number;
}

export const SESSION_STORAGE_KEY = '_ldInit';

export interface ISessionStorageItems {
  landingPage?: boolean;
  search?: boolean;
  profile?: false;
  cart?: false;
  checkout?: false;
  timespan: number;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(
    private cookieService: CookieService,
    public nativeStorageService: NativeStorageService
  ) {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify(LocalStorageService.initStateSession())
    );
  }

  static initStateSession(): ISessionStorageItems {
    const today = new Date().getTime();
    return {
      landingPage: false,
      search: false,
      profile: false,
      cart: false,
      checkout: false,
      timespan: today,
    };
  }

  setVersion() {
    const v: IVersionSystem = JSON.parse(
      this.nativeStorageService.getItem('_v')
    );
    console.log('v', v?.version || 'No version');
    console.log('v env', environment.versions.app);
    const evaluateVersion = v?.version !== environment.versions.app;
    if (!v || !v?.version || !v?.timespan || evaluateVersion) {
      this.diffTimeSpan(v);
      this.actionsToClearSystem();
      this.setVersionOnLocalStorage();
      return;
    }
    this.diffTimeSpan(v);
    this.setVersionOnLocalStorage();
  }

  diffTimeSpan(v: any) {
    const timeNow = new Date().getTime();
    const nowTimeSpan = timeNow - (v?.timespan || 0);
    if (nowTimeSpan > ReLoggedTime && ReLoggedTime !== 0) {
      this.actionsToClearSystem();
      this.setVersionOnLocalStorage();
    }
  }

  actionsToClearSystem() {
    this.clearLocalStorage();
    this.removeCookies();
  }

  setVersionOnLocalStorage() {
    const v: IVersionSystem = {
      version: environment.versions.app,
      timespan: new Date().getTime(),
    };
    this.nativeStorageService.setItem('_v', JSON.stringify(v));
  }

  setOnStorage(key: string, data: any): void | boolean {
    if (!data || !key) {
      return false;
    }

    this.nativeStorageService.setItem(key, JSON.stringify(data));
  }

  getFromStorage(key: string): any {
    if (key) {
      const dataStorage = JSON.parse(this.nativeStorageService.getItem(key));
      return dataStorage || null;
    }
    return null;
  }

  clearLocalStorage() {
    this.nativeStorageService.clear();
  }

  removeCookies() {
    this.cookieService.delete('account', '/', environment.mainDomain);
  }

  iMostReSearch(timeData: any, timeDiffENV: any) {
    const timeNow = new Date().getTime();

    if (!timeData || !timeDiffENV) {
      return true;
    }

    return timeNow - timeData >= timeDiffENV;
  }
}
