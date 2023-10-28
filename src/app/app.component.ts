import { ShowToastrService } from './core/services/show-toastr/show-toastr.service';
import { LoggedInUserService } from './core/services/loggedInUser/logged-in-user.service';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EncryptDecryptService } from './core/services/encrypt-decrypt.service';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { LocalStorageService } from './core/services/localStorage/localStorage.service';
import { RequestCookieSecureService } from './core/services/request-cookie-secure/request-cookie-secure.service';
import { SplashScreenService } from './core/services/splash-screen/splash-screen.service';
import { environment } from 'environments/environment';
import { StorageService } from './core/services/storage/storage.service';
import { MetaService } from './core/services/meta.service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecommerce-sophia-new';
  uploadFileStartSubject: Subject<any>;

  localDatabaseUsers = environment.localDatabaseUsers;

  constructor(
    private rq: RequestCookieSecureService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private router: Router,
    public dialog: MatDialog,
    private showToastr: ShowToastrService,
    private loggedInUserService: LoggedInUserService,
    private authService: AuthenticationService,
    private encryptDecryptService: EncryptDecryptService,
    private localStorageService: LocalStorageService,
    private storageService: StorageService,
    private metaService: MetaService,
    private splashService: SplashScreenService,
  ) {
    this.metaAdd();
    this.rq.requestCookiesSecure();

    this.localStorageService.setVersion();
    const defaultLanguage: any = {
      name: 'Español',
      image: 'assets/images/flags/es.svg',
      lang: 'es',
    };
    if ('language' in this.storageService) {
      let language = JSON.parse(this.storageService.getItem('language'));
      language = language ? language : defaultLanguage;
      this.translate.setDefaultLang(language.lang);
      this.translate.use(language.lang);
    } else {
      this.translate.setDefaultLang(defaultLanguage.lang);
      this.storageService.setItem('language', JSON.stringify(defaultLanguage));
    }
    this.initSystem();
  }

  public onFinishFile() {
    this.showToastr.showInfo(`El archivo se ha subido al sistema exitósamente`);
  }

  public onProgress() {
    // this.uploadFilesService.emitUploadProgress(event);
  }

  public metaAdd() {
    this.metaService.setMeta({
      title: 'Tienda Guajiritos',
      description: 'Tienda online B2C.',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://tienda.guajiritos.com/assets/images/share-img.png',
      url: 'https://guajiritos.com/',
    });
  }

  public onCancelFile() {
    this.showToastr.showInfo(`La subida del  archivo ha sido cancelada`);
  }

  // //////////////////////////

  initSystem() {
    const isCookieAccount = this.storageService.check('account');
    // const userLogged = this.loggedInUserService.getLoggedInUser();

    if (isCookieAccount) {
      try {
        const token = this.encryptDecryptService.decrypt(this.storageService.getItem('account'));
        this.authService.getProfile(token).subscribe({
          next: (user) => {
            this.loggedInUserService.updateUserProfile(user.data);
          },
          error: () => {
            this.loggedInUserService.setLoggedInUser(null);
            this.loggedInUserService.removeCookies();
            this.loggedInUserService.$loggedInUserUpdated.next(null);
          },
        });
      } catch (e) {
        console.warn('Error decrypt value', e);
        this.localStorageService.actionsToClearSystem();
      }
    } else {
      this.loggedInUserService.setLoggedInUser(null);
      this.loggedInUserService.$loggedInUserUpdated.next(null);
    }
  }
}
