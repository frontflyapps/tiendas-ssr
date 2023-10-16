import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EditProfileComponent } from '../../main/edit-profile/edit-profile.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoggedInUserService } from '../../../core/services/loggedInUser/logged-in-user.service';
import { IUser } from '../../../core/classes/user.class';
import { environment } from 'environments/environment';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { BusinessConfigService } from 'src/app/core/services/business-config/business-config.service';

export interface IFooterContacts {
  phone: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  language: string;
  currency: string;
  public version = environment.versions.app;

  public contacts: IFooterContacts;
  public logo = environment.logoFooter;
  showPoweredBy = environment.showPoweredBy;

  loggedInUser: IUser;

  flag: any;
  flags = [
    { name: 'Español', image: 'assets/images/flags/es.svg', lang: 'es' },
    { name: 'English', image: 'assets/images/flags/en.svg', lang: 'en' },
  ];

  year: number;
  languages: any[] = [
    {
      value: 'es',
      language: 'Español',
    },
    {
      value: 'en',
      language: 'Ingles',
    },
  ];

  constructor(
    // private loggedInUserService: LoggedInUserService,
    public dialog: MatDialog,
    public loggedInUserService: LoggedInUserService,
    public translate: TranslateService,
    private storageService: StorageService,
    public appService: BusinessConfigService,
  ) {
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();
    const tempFlag = JSON.parse(this.storageService.getItem('language'));
    this.flag = tempFlag ? tempFlag : this.flags[0];
  }

  ngOnInit(): void {
    this.language = this.translate.currentLang;
    // this.currency = environment.defaultCurrency;
    this.year = new Date().getFullYear();
  }

  public changeLang(flag) {
    this.translate.use(flag.lang);
    this.storageService.setItem('language', JSON.stringify(flag));
    this.flag = flag;
    // this.loggedInUserService.$languageChanged.next(flag);
  }

  onSwitchLanguage(): void {
    this.translate.use(this.language);
    this.storageService.setItem('language', this.language);
    // this.loggedInUserService.languageChange(this.language);
  }

  onShowProfile(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      panelClass: 'app-edit-profile',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
