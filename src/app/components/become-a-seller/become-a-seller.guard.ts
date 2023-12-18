import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInUserService } from './../../core/services/loggedInUser/logged-in-user.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { ShowToastrService } from 'src/app/core/services/show-toastr/show-toastr.service';

@Injectable({
  providedIn: 'root',
})
export class BecomeASellerGuard {
  constructor(
    private loggedInUserService: LoggedInUserService,
    private translateService: TranslateService,
    private route: Router,
    private showToastr: ShowToastrService,
    private storageService: StorageService,
  ) {}

  canActivate(
    //eslint-disable-next-line
    next: ActivatedRouteSnapshot,
    //eslint-disable-next-line
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loggedInUserService.getLoggedInUser()) {
      return true;
    } else {
      this.storageService.setItem('isRegisterToBecomeASeller', 'true');
      this.showToastr.showSucces(
        this.translateService.instant(
          'Debe iniciar sesión para entrar en la creación de cuenta de vendedor',
        ),
        undefined,
        8000,
      );
      this.route.navigate(['/my-account']);
      return false;
    }
  }

  //eslint-disable-next-line
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.loggedInUserService.getLoggedInUser());
    if (this.loggedInUserService.getLoggedInUser()) {
      return true;
    } else {
      this.storageService.setItem('isRegisterToBecomeASeller', 'true');
      this.showToastr.showSucces(
        this.translateService.instant(
          'Debe iniciar sesión para entrar en la creación de cuenta de vendedor',
        ),
        undefined,
        8000,
      );
      this.route.navigate(['/my-account']);
      return false;
    }
  }
}
