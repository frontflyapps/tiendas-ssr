import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ShowToastrService } from '../show-toastr/show-toastr.service';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { ShowSnackbarService } from '../show-snackbar/show-snackbar.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  urlImage = environment.imageUrl;
  showErrorState = false;

  constructor(
    public sanitizer: DomSanitizer,
    private showToastr: ShowToastrService,
    private translateService: TranslateService,
    private showSnackbar: ShowSnackbarService,
    private httpClient: HttpClient,
  ) {}

  /**
   *
   * @param arrayBase Array with All product needed
   * @param arrayIds Array with All Ids to get products
   *
   * Return Array of product
   */
  static getAnArrayFromIdsAndArray(arrayBase: any[], arrayIds: any[]): any[] {
    if (!Array.isArray(arrayBase) || !Array.isArray(arrayIds)) {
      return [];
    }

    return arrayIds.map((itemId) => arrayBase.find((itemProduct) => itemProduct.id === itemId));
  }

  public getUrlImages(): string {
    return environment.imageUrl;
  }

  public getSafeImage(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

  public getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public safeToDom(data: string) {
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }

  public publicSetDescription(data: any, language: string) {
    return this.safeToDom(this.parserLanguage(data, language));
  }

  errorHandle(error: any, nomenclator?: any, action?: any) {
    if (this.showErrorState) {
      return;
    }
    this.showErrorState = true;

    const alternative = nomenclator
      ? action
        ? this.translateService.instant('Error ') + action + ' ' + nomenclator
        : this.translateService.instant('Error ') + action
      : this.translateService.instant(
          `Server response failed, check your connection to the network, or contact the administrators`,
        );
    let msg = alternative;
    if (error.errors && error.errors?.length) {
      msg = error.errors.map(
        (item) =>
          (item.field ? this.translateService.instant(item.field) + ':  ' : '') +
          ' ' +
          (this.translateService.instant(item.title || item.message) + ' '),
      );
    } else if (error.error.errors) {
      msg = error.error.errors.map(
        (item) =>
          (item.field ? this.translateService.instant(item.field) + ':  ' : '') +
          ' ' +
          (this.translateService.instant(item.title || item.message) + ' '),
      );
    } else if (error.error && error.error?.length) {
      msg = error.error.map(
        (item) =>
          (item.field ? this.translateService.instant(item.field) + ':  ' : '') +
          ' ' +
          (this.translateService.instant(item.title || item.message) + ' '),
      );
    } else {
      msg = error.error.message;
    }

    if (error.status >= 300 && error.status < 500) {
      this.showToastr
        .showError(msg, 'Error', 5000)
        .toastRef.afterClosed()
        .subscribe(() => {
          this.showErrorState = false;
        });
    }

    if (error.status >= 500) {
      this.showToastr
        .showError(msg, 'Error', 5000)
        .toastRef.afterClosed()
        .subscribe(() => {
          this.showErrorState = false;
        });
    }
  }

  errorHandle2(error: any, nomenclator?: any, action?: any) {
    const alternative = nomenclator
      ? action
        ? this.translateService.instant('Error ') + action + ' ' + nomenclator
        : this.translateService.instant('Error ') + action
      : this.translateService.instant(
          `Server response failed, check your connection to the network, or contact the administrators`,
        );
    let msg = alternative;
    if (error.errors && error.errors?.length) {
      msg = error.errors.map(
        (item) => (item.field ? item.field + ' : ' : '') + ' ' + (item.title || item.message + ' '),
      );
    } else if (error.error.errors) {
      msg = error.error.errors.map(
        (item) => (item.field ? item.field + ' : ' : '') + ' ' + (item.title || item.message + ' '),
      );
    } else if (error.error && error.error?.length) {
      msg = error.error.map(
        (item) => (item.field ? item.field + ' : ' : '') + ' ' + (item.title || item.message + ' '),
      );
    } else {
      msg = error.error.message;
    }
    this.showToastr.showError(msg, undefined, 8000);
  }

  //eslint-disable-next-line
  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(this.urlImage, { responseType: 'blob' });
  }

  parserLanguage(item: any, language: string) {
    if (item && language) {
      if (item[language] && item[language]?.length) {
        return item[language];
      } else if (item['en'] && item['en']?.length) {
        return item['en'];
      } else {
        return item['es'];
      }
    } else {
      return;
    }
  }

  getLang() {
    return 'es'; // TODO: Cambiar por el idioma del usuario

    // try {
    //   let lang = JSON.parse(this.storageService.getItem('language'));
    //   return lang.lang || 'es';
    // } catch (error) {
    //   return 'es';
    // }
  }

  keyPressAlpha(event: any) {
    const inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressNumbers(event: any) {
    const inp = String.fromCharCode(event.keyCode);
    if (/[0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressAlphaAndNumbers(event: any) {
    const inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9 ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressAlphaAndNumbersModIdentity(event: any) {
    const inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9\-_.]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressAlphaAndNumbersModUsername(event: any) {
    const inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9@.]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyLettersNumberForEmail(event: any) {
    const inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9@._-]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  // keyPressNumbers(event) {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   // Only Numbers 0-9
  //   if ((charCode < 48 || charCode > 57)) {
  //     event.preventDefault();
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  generateUuid(): string {
    let tempId = '';

    tempId = this.generator();

    return tempId;
  }

  private generator(): string {
    const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;

    return isString;
  }

  private S4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
}
