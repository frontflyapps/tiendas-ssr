import { Injectable } from '@angular/core';
import { IUser } from '../../classes/user.class';
import { Subject } from 'rxjs';
import { NavigationService } from '../navigation/navigation.service';
import { EncryptDecryptService } from '../encrypt-decrypt.service';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService } from '../localStorage/localStorage.service';
import { environment } from 'environments/environment';
import { NativeStorageService } from '../native-storage/native-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInUserService {
  $loggedInUserUpdated = new Subject<any>();
  $languageChanged = new Subject<any>();
  loggedInUser: IUser | null = null;
  listNavItems: any[] = [];
  visitCacheUrl = environment.apiUrl + 'addvisitcache/:token';
  public flags = [
    { name: 'Español', image: 'assets/images/flags/es.svg', lang: 'es' },
    { name: 'English', image: 'assets/images/flags/en.svg', lang: 'en' },
  ];

  constructor(
    private cookieService: CookieService,
    private navigationService: NavigationService,
    private localStorageService: LocalStorageService,
    private encryptDecryptService: EncryptDecryptService,
    private nativeStorageService: NativeStorageService
  ) {
    this.listNavItems = [...this.navigationService.getNavItems()];

    (window as any).global = window;
    // @ts-ignore
    window.Buffer = window.Buffer || require('buffer').Buffer;
    this.loggedInUser = this.getLoggedInUser();
  }

  public setNewProfile(profile: any) {
    let dataValue = this.getLoggedInUser() ? this.getLoggedInUser() : {};
    dataValue = Object.assign(dataValue, profile);
    this.updateUserProfile(dataValue);
    this.loggedInUser = dataValue;
    this.$loggedInUserUpdated.next(this.loggedInUser);
  }

  public getLanguage() {
    return JSON.parse(this.nativeStorageService.getItem('language'));
  }

  public getLoggedInUser(): any {
    let user = localStorage.getItem('user');
    if (!user) {
      return null;
    }
    try {
      user = this.encryptDecryptService.decrypt(user);
      return JSON.parse(user);
    } catch (e) {
      console.warn('Error decrypt value', e);
      this.localStorageService.actionsToClearSystem();
      return null;
    }
  }

  public setLoggedInUser(user: any) {
    this.loggedInUser = user;
  }

  public getTokenCookie(): string {
    try {
      if (this.cookieService.get('account')) {
        return this.encryptDecryptService.decrypt(
          this.cookieService.get('account')
        );
      }
      if (this.nativeStorageService.getItem('token')) {
        return this.encryptDecryptService.decrypt(
          this.nativeStorageService.getItem('token')
        );
      }
      return '';
    } catch (e) {
      console.warn('Error decrypt value', e);
      this.localStorageService.actionsToClearSystem();
      return '';
    }
  }

  public saveAccountCookie(token: string) {
    try {
      const hashedPass = this.encryptDecryptService.encrypt(token);
      this.cookieService.set(
        'account',
        hashedPass,
        null,
        '/',
        environment.mainDomain
      );
      localStorage.setItem('token', hashedPass);
    } catch (e) {
      console.warn('Error decrypt value', e);
      this.localStorageService.actionsToClearSystem();
    }
  }

  public updateUserProfile(user: any) {
    try {
      let dataString = JSON.stringify(user);
      dataString = this.encryptDecryptService.encrypt(dataString);
      localStorage.setItem('user', dataString);
      this.$loggedInUserUpdated.next(dataString);
    } catch (e) {
      console.warn('Error decrypt value', e);
      this.localStorageService.actionsToClearSystem();
    }
  }

  removeCookies() {
    this.cookieService.delete('account', '/', environment.mainDomain);
  }

  public hasRolUser(...args: any[]) {
    const roleTypes = [...args];
    for (const type of roleTypes) {
      if (type.constructor != String) {
        return false;
      }
    }
    const user = this.getLoggedInUser();
    if (!user) {
      return false;
    }
    let flag = false;
    if (user?.roles) {
      for (const role of user?.roles) {
        const findIndex = roleTypes.findIndex((i) => i == role.type);
        if (findIndex > -1) {
          flag = true;
          return flag;
        }
      }
    }
    return flag;
  }

  public isAdminUser() {
    let flag = false;
    const user = this.getLoggedInUser();
    if (!user) {
      return false;
    }
    if (user?.roles) {
      user.roles.map((item: any) => {
        if (item.type === 'Admin') {
          flag = true;
          return true;
        }
      });
    }
    return flag;
  }

  public isOwnerUser() {
    let flag = false;
    const user = this.getLoggedInUser();
    if (!user) {
      flag = true;
      return false;
    }
    if (user?.roles) {
      user.roles.forEach((item: any) => {
        if (item.type === 'Owner') {
          flag = true;
          return true;
        }
      });
    }
    return flag;
  }

  public isAdminOrOwnerUser() {
    const flag = this.isAdminUser() || this.isOwnerUser();
    return flag;
  }

  public isClientUser() {
    let flag = false;
    const user = this.getLoggedInUser();
    if (!user) {
      flag = true;
      return false;
    }

    if (user?.roles) {
      user.roles.forEach((item: any) => {
        if (item.type === 'Client') {
          flag = true;
          return true;
        }
      });
    }
    return flag;
  }

  public isMessengerUser() {
    let flag = false;
    const user = this.getLoggedInUser();
    if (!user) {
      return false;
    }
    if (user?.roles) {
      user.roles.forEach((item: any) => {
        if (item.type === 'Messenger') {
          flag = true;
          return true;
        }
      });
    }
    return flag;
  }

  public isOwnerOfABussines(OwnerId: string) {
    const flag = false;
    const user = this.getLoggedInUser();
    if (!user) {
      return false;
    }
    return user.id == OwnerId;
  }

  public getlaguages() {
    return this.flags;
  }

  public _getDataFromStorage(key: string) {
    const data = localStorage.getItem(key);
    if (data == undefined) {
      return undefined;
    }
    const base64regex =
      /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    let base64data = data + '';
    if (!base64regex.test(data)) {
      const buff = Buffer.from(data);
      base64data = buff.toString('base64');
      localStorage.setItem(key, base64data);
    }
    const buff2 = Buffer.from(base64data, 'base64');
    const userLogged = buff2.toString('utf-8');
    return JSON.parse(userLogged);
  }

  public _setDataToStorage(key: string, stringData: any) {
    const buff = Buffer.from(stringData);
    const base64data = buff.toString('base64');
    localStorage.setItem(key, base64data);
  }
}
