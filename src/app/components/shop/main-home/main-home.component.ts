import { IPagination } from '../../../core/classes/pagination.class';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggedInUserService } from '../../../core/services/loggedInUser/logged-in-user.service';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MetaService } from 'src/app/core/services/meta.service';
import { IProductCard } from '../../../core/classes/product-card.class';
import {
  FRONT_PRODUCT_DATA,
  LANDING_PAGE,
  PRODUCT_COUNT,
} from '../../../core/classes/global.const';
import { LocalStorageService } from '../../../core/services/localStorage/localStorage.service';
import { ProductDataService, ProductService } from '../../shared/services/product.service';
import { GlobalStateOfCookieService } from '../../../core/services/request-cookie-secure/global-state-of-cookie.service';
import { CartService } from '../../shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { environment } from 'environments/environment';
import { BusinessConfigService } from 'src/app/core/services/business-config/business-config.service';
import { LandingPageService } from 'src/app/core/services/landing-page/landing-page.service';
import { I18nFieldPipe } from '../../../core/pipes/i18n-field.pipe';
import { ParseLangPipe } from '../../../core/pipes/parse-lang.pipe';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { SkeletonLoadingCardsComponent } from '../../shared/skeleton-loading-cards/skeleton-loading-cards.component';
import { ProductCarouselComponent } from '../product-carousel/product-carousel.component';
import { BannerPromotionComponent } from '../banner-promotion/banner-promotion.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { BreakpointsService } from 'src/app/core/services/breakpoints/breakpoints.service';

export interface ProductInterface {
  name: string;
  value: any[];
}

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MainCarouselComponent,
    NgFor,
    MatCardModule,
    NgClass,
    MatIconModule,
    InfiniteScrollModule,
    BannerPromotionComponent,
    ProductCarouselComponent,
    SkeletonLoadingCardsComponent,
    ProductGridComponent,
    ProductListComponent,
    TranslateModule,
    ParseLangPipe,
    I18nFieldPipe,
  ],
})
export class MainHomeComponent implements OnInit, OnDestroy {
  public flags = [
    { name: 'Español', image: 'assets/images/flags/es.svg', lang: 'es' },
    { name: 'English', image: 'assets/images/flags/en.svg', lang: 'en' },
  ];

  public currency: any;
  public flag: any;
  public loading = false;

  indexProduct: number;

  language: any;
  _unsubscribeAll: Subject<any>;
  loggedInUser: any = null;
  inLoading = false;

  public slides = [
    { title: 'Huge sale', subTitle: 'Up to 70%', image: 'assets/images/carousel/bg-slide.jpg' },
  ];

  showStatic = true;

  ////////////////////////////////////////////////////////////////////////////////

  popularProducts: IProductCard[] = [];
  featuredProducts: IProductCard[] = [];
  servicesProducts: any[] = [];
  bestSellersProducts: IProductCard[] = [];
  allProducts: IProductCard[] = [];
  banners: any[] = [];
  loadingPopular = false;
  loadingFeatured = false;
  loadingAllProduct = true;
  loadingServices = true;
  loadingBestSellers = true;
  showOnlyTwoProducts = false;
  loadingProducts = false;
  countProducts = 0;

  pathToRedirect: any;
  paramsToUrlRedirect: any;
  sectionProducts: any[] = [];
  arraySectionProducts: any[] = [];

  queryPopular: IPagination = {
    limit: 8,
    offset: 0,
    total: 0,
    order: 'rating',
  };

  queryFeatured: IPagination = {
    limit: 8,
    offset: 0,
    total: 0,
    order: '-createdAt',
  };

  queryAll: IPagination = {
    limit: 16,
    offset: 0,
    total: 0,
    order: '-name',
  };

  queryBanners: IPagination = {
    limit: 3,
    offset: 0,
    total: 0,
    order: '-updatedAt',
  };

  queryBlog: IPagination = {
    limit: 3,
    offset: 0,
    total: 0,
    order: '-updatedAt',
  };

  queryServices: IPagination = {
    limit: 3,
    offset: 0,
    total: 0,
    order: '-createdAt',
  };

  allArticles: any[] = [];
  allBicons: any[] = [];

  imageUrl = environment.imageUrl;
  url = environment.apiUrl + 'landing-page';
  arrayProducts: ProductInterface[] = [];

  visualizationSections: any;

  bigBanner1 = null;
  bigBanner2 = null;

  /////////////////////////////////////////////////////////////////////////////////

  constructor(
    public utilsService: UtilsService,
    public spinner: NgxSpinnerService,
    private loggedInUserService: LoggedInUserService,
    private localStorageService: LocalStorageService,
    private httpClient: HttpClient,
    private appService: BusinessConfigService,
    private landingPageService: LandingPageService,
    private metaService: MetaService,
    public productDataService: ProductDataService,
    public translateService: TranslateService,
    public cartService: CartService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private globalStateOfCookieService: GlobalStateOfCookieService,
    public breakpointsService: BreakpointsService,
  ) {
    this.productService.updatedSectionsProduct$.subscribe(() => {
      this.sectionProducts = this.productService.sections;
      this.visualizationSections = this.productService.sectionIds;
      let cont = 0;
      this.sectionProducts.map((item) => {
        if (item.categories) {
          const encontro = this.arraySectionProducts.find(
            (section) => section.id === item.categories.id,
          );
          if (!encontro) {
            const arr: any[] = item.categories.categories.map((itemId) =>
              item.categories.products.find((itemProduct) => itemProduct.id === itemId),
            );
            this.arraySectionProducts.push({
              name: this.visualizationSections[cont].title,
              value: arr,
              visualType: { ...this.visualizationSections[cont] },
              id: item.categories.id,
            });
          }
          this.loadingAllProduct = false;
        } else if (item.businessPromotion) {
          const encontro = this.arraySectionProducts.find(
            (section) => section.id === item.businessPromotion.id,
          );
          if (!encontro) {
            this.arraySectionProducts.push({
              ...item.businessPromotion,
              ...{ visualType: { ...this.visualizationSections[cont] } },
            });
          }
        } else if (item.featured) {
          const encontro = this.arraySectionProducts.find(
            (section) => section.id === this.visualizationSections[cont].id,
          );
          if (!encontro) {
            const arr: any[] = item.featured.features.map((itemId) =>
              item.featured.products.find((itemProduct) => itemProduct.id === itemId),
            );
            this.arraySectionProducts.push({
              name: this.visualizationSections[cont].title,
              value: arr,
              visualType: { ...this.visualizationSections[cont] },
              id: this.visualizationSections[cont].id,
            });
            this.loadingAllProduct = false;
          }
        } else if (item.suggested) {
          const encontro = this.arraySectionProducts.find(
            (section) => section.id === this.visualizationSections[cont].id,
          );
          if (!encontro) {
            const arr: any[] = item.suggested.suggested.map((itemId) =>
              item.suggested.products.find((itemProduct) => itemProduct.id === itemId),
            );
            this.arraySectionProducts.push({
              name: this.visualizationSections[cont].title,
              value: arr,
              visualType: { ...this.visualizationSections[cont] },
              id: this.visualizationSections[cont].id,
            });
            // }
            this.loadingAllProduct = false;
          }
        }
        cont++;
      });
    });
    this.productService.getAllProductsSections();
    this._unsubscribeAll = new Subject<any>();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();

    this.pathToRedirect = this.route.snapshot.routeConfig.path;
    // this.frontProduct();
    // this.getFrontData();
    this.route.queryParamMap.subscribe((params) => {
      this.paramsToUrlRedirect = { ...params };
    });

    // this.productService.updatedSections$

    // this.productService.updatedProducts$.subscribe((response) => {
    //   this.frontProduct();
    // });

    this.metaService.setMeta({
      title: environment.meta.mainPage.title,
      description: environment.meta.mainPage.description,
      keywords: environment.meta.mainPage.keywords,
      shareImg: environment.meta.mainPage.shareImg,
    });
  }

  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    this.globalStateOfCookieService.getCookieState()
      ? this.initComponent()
      : this.setSubscriptionToCookie();
    // this.frontProduct();
  }

  frontProduct() {
    if (this.arrayProducts.length === 0) {
      // this.productService.updatedProducts$.subscribe((response) => {
      if (this.appService.businessConfig?.frontDataProduct === 'normal') {
        this.getDataProducts();
      } else if (this.appService.businessConfig?.frontDataProduct === 'category') {
        this.getCategoriesProducts();
      } else {
        this.getCategoriesProducts();
      }
      // });
    }
  }

  initComponent() {
    this.loadingAllProduct = true;
    this.loadingPopular = true;
    this.loadingFeatured = true;
    this.loadingServices = true;
    this.loadingBestSellers = true;

    this.getPFDFromStorage();

    this.loggedInUserService.$languageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.language = data.lang;
      });

    this.loggedInUserService.$loggedInUserUpdated
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.loggedInUser = this.loggedInUserService.getLoggedInUser();
      });
  }

  setSubscriptionToCookie() {
    this.globalStateOfCookieService.stateOfCookie$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((thereIsCookie) => {
        if (thereIsCookie) {
          this.initComponent();
        }
      });
  }

  identify(index, item) {
    return item.id;
  }

  getSections() {}

  getCategoriesProducts() {
    const pfd = this.localStorageService.getFromStorage(FRONT_PRODUCT_DATA);
    // console.log(pfd);
    if (pfd) {
      Object.entries(pfd).sort(() => Math.random() - 0.5);
      Object.entries(pfd?.categories).forEach((item: [string, Array<any>]) => {
        const arr: any[] = item[1].map((itemId) =>
          pfd.products.find((itemProduct) => itemProduct.id === itemId),
        );
        this.arrayProducts.push({
          name: item[0],
          value: arr,
        });
      });
    } else {
      // Aqui es donde entra cuando la peticion front-data-product no ha respondido y en el local storage no hay valor
      // de productos
      // console.warn('No hay productos');
    }
  }

  public async onAddToCart(product: any, quantity = 1) {
    this.inLoading = true;
    const loggedIn = await this.cartService.addToCartOnProductCard(product, quantity);
    this.inLoading = false;
    if (!loggedIn) {
      this.cartService.redirectToLoginWithOrigin(this.pathToRedirect, this.paramsToUrlRedirect);
    }
  }

  getProducts() {
    this.productService.getProduct.next('');
  }

  setValuesFromResponse(response) {
    this.productDataService.popularProducts = UtilsService.getAnArrayFromIdsAndArray(
      response.products,
      response.rating,
    );
    this.productDataService.featuredProducts = UtilsService.getAnArrayFromIdsAndArray(
      response.products,
      response.isFeatured,
    );
    this.productDataService.bestSellerProducts = UtilsService.getAnArrayFromIdsAndArray(
      response.products,
      response.bestSell,
    );
    this.productDataService.allProducts = UtilsService.getAnArrayFromIdsAndArray(
      response.products,
      response.lastCreated,
    );
  }

  getDataProducts() {
    try {
      const pfd = this.localStorageService.getFromStorage(FRONT_PRODUCT_DATA);
      if (!pfd) {
        this.getProducts();
        return;
      }
      if (
        this.localStorageService.iMostReSearch(pfd?.timespan, environment.timeToResearchProductData)
      ) {
        this.getProducts();
      } else {
        this.setValuesFromResponse(pfd);
      }
    } catch (e) {}
    this.allProducts = this.productDataService.allProducts;
    this.popularProducts = this.productDataService.popularProducts;
    this.featuredProducts = this.productDataService.featuredProducts;
    this.bestSellersProducts = this.productDataService.bestSellerProducts;
  }

  //
  // getDataProductsTest() {
  //   try {
  //     const pfd = this.localStorageService.getFromStorage(FRONT_PRODUCT_DATA);
  //     if (!pfd) {
  //       this.getProducts();
  //       return;
  //     }
  //     this.setValuesFromResponse(pfd);
  //   } catch (e) {
  //   }
  //   this.allProducts = this.productDataService.allProducts;
  //   this.popularProducts = this.productDataService.popularProducts;
  //   this.featuredProducts = this.productDataService.featuredProducts;
  //   this.bestSellersProducts = this.productDataService.bestSellerProducts;
  // }

  loadProducts() {
    console.log('load');
    if (!this.loadingProducts) {
      this.loadingProducts = true;
      this.productService.getSectionsIds().subscribe(() => {
        setTimeout(() => {
          this.loadingProducts = false;
        }, 500);
      });
    }
  }

  getPFDFromStorage() {
    try {
      const lp = this.localStorageService.getFromStorage(FRONT_PRODUCT_DATA);

      if (!lp) {
        this.getFrontData();
        return;
      }

      if (
        this.localStorageService.iMostReSearch(
          lp?.timespan,
          environment.timeToResearchLandingPageData,
        )
      ) {
        this.getFrontData();
      } else {
        this.setDataOnLandingPage(lp);
      }
    } catch (e) {
      this.getFrontData();
    }
  }

  setUrlPathOnImages(data) {
    this.slides = [];

    this.slides = data.carrusels.map((item) => {
      return {
        ...item,
        image: this.imageUrl + item.image,
        imageXs: this.imageUrl + item.imageXs,
      };
    });
  }

  setDataOnLandingPage(data) {
    this.setUrlPathOnImages(data);

    this.showStatic = false;
    this.allBicons = data.bicons || [];
    this.showOnlyTwoProducts = this.allProducts.length <= 2;
    this.banners = data.banner;

    this.allArticles = data.blogRecents;
    this.countProducts = data.countProducts;
    this.servicesProducts = data.ourServices;
    this.bigBanner1 = data.promotions.filter((promotion) => promotion.type === 'bigBannerPromo1');
    this.bigBanner2 = data.promotions.filter((promotion) => promotion.type === 'bigBannerPromo2');
    this.loadingServices = false;
    this.getDataProducts();
    this.loadingPopular = false;
    this.loadingFeatured = false;
    // this.loadingAllProduct = false;
    this.loadingBestSellers = false;
  }

  getFrontData() {
    this.landingPageService.getFrontData({
      onAfterSuccess: (data) => {
        this.frontProduct();
        this.loading = false;
        const dataResponse = JSON.parse(JSON.stringify(data));
        this.setDataOnLandingPage(dataResponse);

        const _response: any = JSON.parse(JSON.stringify(data));
        _response.timespan = new Date().getTime();
        this.localStorageService.setOnStorage(LANDING_PAGE, _response);

        const _responseCP: any = {};
        _responseCP.count = JSON.parse(JSON.stringify(_response.countProducts));
        _responseCP.timespan = new Date().getTime();
        this.localStorageService.setOnStorage(PRODUCT_COUNT, _responseCP);
      },
      onAfterFailed: () => {
        this.showStatic = true;
        // this.loadingAllProduct = false;
        this.loadingPopular = false;
        this.loadingFeatured = false;
        this.loadingServices = false;
      },
    });

    // this.getFrontDataRequest()
    //   .then((data: any) => {
    //     console.log('data', data);
    //     // this.frontProduct();
    //     this.loading = false;
    //     const dataResponse = JSON.parse(JSON.stringify(data.data));
    //     this.setDataOnLandingPage(dataResponse);

    //     const _response: any = JSON.parse(JSON.stringify(data.data));
    //     _response.timespan = new Date().getTime();
    //     this.localStorageService.setOnStorage(LANDING_PAGE, _response);

    //     const _responseCP: any = {};
    //     _responseCP.count = JSON.parse(JSON.stringify(_response.countProducts));
    //     _responseCP.timespan = new Date().getTime();
    //     this.localStorageService.setOnStorage(PRODUCT_COUNT, _responseCP);
    //   })
    //   .catch((error) => {
    //     this.showStatic = true;
    //     // this.loadingAllProduct = false;
    //     this.loadingPopular = false;
    //     this.loadingFeatured = false;
    //     this.loadingServices = false;
    //   });
  }

  getFrontDataRequest() {
    return this.httpClient.get(this.url).toPromise();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
