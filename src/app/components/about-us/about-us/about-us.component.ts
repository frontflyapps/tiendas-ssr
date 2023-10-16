import { LoggedInUserService } from './../../../core/services/loggedInUser/logged-in-user.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactUsService } from '../../../core/services/contact-us/contact-us.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'environments/environment';
import { IUser } from 'src/app/core/classes/user.class';
import { MetaService } from 'src/app/core/services/meta.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit, OnDestroy {
  contactUsForm: UntypedFormGroup;
  loggedInUser: IUser | null = null;
  _unsubscribeAll: Subject<any>;
  aboutUs: any;
  language = 'es';
  imageUrl = environment.imageUrl;

  constructor(
    private fb: UntypedFormBuilder,
    private contactUsService: ContactUsService,
    private translate: TranslateService,
    private loggedInUserService: LoggedInUserService,
    private metaService: MetaService,
  ) {
    this._unsubscribeAll = new Subject();
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();

    this.metaService.setMeta({
      title: 'Quienes somos?',
      description: environment.meta.mainPage.description,
      keywords: environment.meta.mainPage.keywords,
      shareImg: environment.meta.mainPage.shareImg,
    });
  }

  ngOnInit() {
    this.loggedInUserService.$loggedInUserUpdated
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.loggedInUser = this.loggedInUserService.getLoggedInUser();
      });
    this.language = this.translate.getDefaultLang();
    this.contactUsService.getAboutUs().subscribe((data: any) => {
      this.aboutUs = data;
      if (this.aboutUs.image) {
        // this.metaService.setMeta(null, null, this.imageUrl + this.aboutUs.image, null);
      }
    });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
