import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IPagination } from './../../../core/classes/pagination.class';
import { UtilsService } from './../../../core/services/utils/utils.service';
import { Subject } from 'rxjs';
import { LoggedInUserService } from './../../../core/services/loggedInUser/logged-in-user.service';
import { takeUntil } from 'rxjs/operators';
import { BlogService } from '../../../core/services/blog/blog.service';
import { environment } from 'environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { LazyImgDirective } from '../../../core/directives/lazy-img/lazy-img.directive';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, LazyImgDirective, TranslateModule],
})
export class BlogSectionComponent implements OnInit, OnDestroy {
  imageUrl = environment.imageUrl;
  language: any;
  _unsubscribeAll: Subject<any>;
  loggedInUser: any = null;

  allArticles: any[] = [];

  queryBlog: IPagination = {
    limit: 3,
    offset: 0,
    total: 0,
    order: '-updatedAt',
  };
  getDatafromInput = false;

  constructor(
    private blogService: BlogService,
    public utilsService: UtilsService,
    public loggedInUserService: LoggedInUserService,
  ) {
    this._unsubscribeAll = new Subject<any>();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
  }

  @Input()
  set _banners(articles) {
    this.allArticles = [...articles];
    this.getDatafromInput = true;
  }

  ngOnInit() {
    this.loggedInUserService.$languageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.language = data.lang;
      });

    if (!this.getDatafromInput) {
      this.blogService.getAllArticles(this.queryBlog).subscribe((data: any) => {
        this.allArticles = data.data;
      });
    }
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
