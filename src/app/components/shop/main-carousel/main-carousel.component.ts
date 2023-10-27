import { LoggedInUserService } from '../../../core/services/loggedInUser/logged-in-user.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
  standalone: true,
  imports: [NgFor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  _unsubscribeAll: Subject<any>;
  language: any;
  show = false;

  constructor(
    private translate: TranslateService,
    private loggedInUserService: LoggedInUserService,
    public utilsService: UtilsService,
  ) {
    this._unsubscribeAll = new Subject();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
  }

  _slides: any[] = [];

  @Input() set slides(values: any[]) {
    this._slides = [...values];
    // if (this._slides && this._slides.length) {
    //   setTimeout(() => {
    //     let element = document.getElementById('my-main-slider');
    //     if (element.classList.contains('loader')) {
    //       element.classList.toggle('loader');
    //     }
    //   }, 150);
    // }
  }

  ngOnInit() {
    this.loggedInUserService.$languageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.language = data.lang;
      });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

  ngAfterViewInit(): void {
    this.initConfig();
  }

  initConfig() {
    // const swiperEl = document.querySelector('#app-main-carousel-swiper-container');
    // console.log('swiperEl---------------------------------', swiperEl);
    // if (swiperEl) {
    //   // swiper parameters
    //   const swiperOptions: SwiperOptions = {
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     keyboard: true,
    //     navigation: true,
    //     pagination: false,
    //     // pagination: {
    //     //   clickable: true,
    //     //   el: '.swiper-pagination',
    //     // },
    //     grabCursor: true,
    //     loop: false,
    //     // preloadImages: false,
    //     // lazy: true,
    //     autoplay: {
    //       delay: 5000,
    //       disableOnInteraction: false,
    //     },
    //     speed: 500,
    //     effect: 'fade',
    //   };
    //   Object.assign(swiperEl, swiperOptions);
    //   // @ts-expect-error necessarCheck the docs
    //   swiperEl.initialize();
    // }
  }
}
