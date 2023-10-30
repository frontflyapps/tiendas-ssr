import { Injectable } from '@angular/core';
import { IUser } from '../../classes/user.class';
import { Subject } from 'rxjs';
import { NavigationService } from '../navigation/navigation.service';
import { EncryptDecryptService } from '../encrypt-decrypt.service';
import { LocalStorageService } from '../localStorage/localStorage.service';
import { environment } from 'environments/environment';
import { StorageService } from '../storage/storage.service';
import { Buffer } from 'buffer';
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
    private navigationService: NavigationService,
    private localStorageService: LocalStorageService,
    private encryptDecryptService: EncryptDecryptService,
    private storageService: StorageService,
  ) {
    this.listNavItems = [...this.navigationService.getNavItems()];

    // (window as any).global = window; //TODO Fix later
    // window.Buffer = window.Buffer || Buffer; //TODO Fix later
    this.loggedInUser = this.getLoggedInUser();
  }

  public setNewProfile(profile: any) {
    const loggedUser = this.getLoggedInUser();
    let dataValue = loggedUser ? loggedUser : {};
    dataValue = Object.assign(dataValue, profile);
    this.updateUserProfile(dataValue);
    this.loggedInUser = dataValue;
    this.$loggedInUserUpdated.next(this.loggedInUser);
  }

  public getLanguage() {
    return JSON.parse(this.storageService.getItem('language'));
  }

  public getLoggedInUser(): IUser | null {
    let user = this.storageService.getItem('user');
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
      if (this.storageService.getItem('account')) {
        return this.encryptDecryptService.decrypt(this.storageService.getItem('account'));
      }
      if (this.storageService.getItem('token')) {
        return this.encryptDecryptService.decrypt(this.storageService.getItem('token'));
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

      // this.cookieService.set('account', hashedPass, undefined, '/', environment.mainDomain); // (Cupull) Original Code
      this.storageService.setItem('account', hashedPass); // (Cupull) cookies are not saved with the domain

      this.storageService.setItem('token', hashedPass);
    } catch (e) {
      console.warn('Error decrypt value', e);
      this.localStorageService.actionsToClearSystem();
    }
  }

  public updateUserProfile(user: any) {
    try {
      let dataString = JSON.stringify(user);
      dataString = this.encryptDecryptService.encrypt(dataString);
      this.storageService.setItem('user', dataString);
      this.$loggedInUserUpdated.next(dataString);
    } catch (e) {
      console.warn('Error decrypt value', e);
      this.localStorageService.actionsToClearSystem();
    }
  }

  removeCookies() {
    this.storageService.removeItem('account');
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
    if (user?.roles?.some(({ type }) => roleTypes.includes(type))) {
      return true;
    }
    return false;
  }

  public isAdminUser() {
    const user = this.getLoggedInUser();
    if (!user) {
      return false;
    }
    if (user?.roles?.some(({ type }) => type === 'Admin')) {
      return true;
    }
    return false;
  }

  public isOwnerUser() {
    const user = this.getLoggedInUser();
    if (!user) {
      return false;
    }
    if (user?.roles?.some(({ type }) => type === 'Owner')) {
      return true;
    }

    return false;
  }

  public isAdminOrOwnerUser() {
    const flag = this.isAdminUser() || this.isOwnerUser();
    return flag;
  }

  public isClientUser() {
    const user = this.getLoggedInUser();
    if (!user) {
      return false;
    }

    if (user?.roles?.some(({ type }) => type === 'Client')) {
      return true;
    }

    return false;
  }

  public isMessengerUser() {
    const user = this.getLoggedInUser();
    if (!user) {
      return false;
    }
    if (user?.roles?.some(({ type }) => type === 'Messenger')) {
      return true;
    }
    return false;
  }

  public isOwnerOfABussines(OwnerId: string) {
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
    const data = this.storageService.getItem(key);
    if (data == undefined) {
      return undefined;
    }
    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    let base64data = data + '';
    if (!base64regex.test(data)) {
      const buff = Buffer.from(data);
      base64data = buff.toString('base64');
      this.storageService.setItem(key, base64data);
    }
    const buff2 = Buffer.from(base64data, 'base64');
    const userLogged = buff2.toString('utf-8');
    return JSON.parse(userLogged);
  }

  public _setDataToStorage(key: string, stringData: any) {
    const buff = Buffer.from(stringData);
    const base64data = buff.toString('base64');
    this.storageService.setItem(key, base64data);
  }
}
