import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggedInUserService } from 'src/app/core/services/loggedInUser/logged-in-user.service';
import { takeUntil } from 'rxjs/operators';
import { CopyTermsService } from '../../core/services/copy-terms/copy-terms.service';
import { SafeHtmlPipe } from '../../core/pipes/safe-html.pipe';
import { ParseLangPipe } from '../../core/pipes/parse-lang.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
  standalone: true,
  imports: [RouterLink, MatIconModule, TranslateModule, ParseLangPipe, SafeHtmlPipe],
})
export class TermsConditionsComponent implements OnInit, OnDestroy {
  language = 'es';
  _unsubscribeAll: Subject<any> = new Subject();
  text: undefined;

  constructor(
    private loggedInUserService: LoggedInUserService,
    private termService: CopyTermsService,
  ) {}

  ngOnInit() {
    this.loggedInUserService.$languageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.language = data.lang;
      });
    this.termService.getTermsConditions().subscribe((data: any) => {
      data?.data.map((item) => {
        if (item.status === 'enabled') {
          this.text = item.text;
        }
      });
    });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
