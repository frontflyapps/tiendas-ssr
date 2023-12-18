import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInUserService } from './../../core/services/loggedInUser/logged-in-user.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { ShowToastrService } from 'src/app/core/services/show-toastr/show-toastr.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutGuard {
  constructor(
    private loggedInUserService: LoggedInUserService,
    private translateService: TranslateService,
    private route: Router,
    private showToastr: ShowToastrService,
    private storageService: StorageService,
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loggedInUserService.getLoggedInUser()) {
      return true;
    } else {
      this.storageService.setItem('isRegisterToPay', 'true');
      this.showToastr.showSucces(
        this.translateService.instant(
          'You need to be logged in to pay, please register or create an account',
        ),
        undefined,
        8000,
      );
      this.route.navigate(['/my-account']);
      return false;
    }
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loggedInUserService.getLoggedInUser()) {
      return true;
    } else {
      this.storageService.setItem('isRegisterToPay', 'true');
      this.showToastr.showSucces(
        this.translateService.instant(
          'You need to be logged in to pay, please register or create an account',
        ),
        undefined,
        8000,
      );
      this.route.navigate(['/my-account']);
      return false;
    }
  }
}
