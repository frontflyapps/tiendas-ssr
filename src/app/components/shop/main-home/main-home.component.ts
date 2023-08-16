import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { IProductCard } from 'src/app/core/classes/product-card.class';
import { IPagination } from 'src/app/core/classes/pagination.class';
import { environment } from 'environments/environment';

import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { LandingPageService } from 'src/app/core/services/landing-page/landing-page.service';
import {
  LandignPageData,
  LandingPagePromotion,
} from 'src/app/core/classes/landing-page.class';

export interface ProductInterface {
  name: string;
  value: any[];
}

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {
  public flags = [
    { name: 'Español', image: 'assets/images/flags/es.svg', lang: 'es' },
    { name: 'English', image: 'assets/images/flags/en.svg', lang: 'en' },
  ];

  public currency: any;
  public flag: any;
  public loading = false;

  indexProduct?: number;

  language: any;
  _unsubscribeAll?: Subject<any>;
  loggedInUser: any = null;
  inLoading = false;

  public slides = [
    {
      title: 'Huge sale',
      subTitle: 'Up to 70%',
      image: 'assets/images/carousel/bg-slide.jpg',
    },
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
  businessConfig = undefined;
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

  bigBanner1: LandignPageData['promotions'] = [];
  bigBanner2: LandignPageData['promotions'] = [];

  public applyStyle = false;

  /////////////////////////////////////////////////////////////////////////////////

  constructor(
    public utilsService: UtilsService,
    private landingPageService: LandingPageService
  ) {}

  ngOnInit() {
    this.getFrontData();
  }

  loadProducts() {}

  identify(index: number, item: any) {
    return item.id;
  }

  // getFrontDataRequest() {
  //   return this.httpClient.get(this.url).toPromise();
  // }

  getFrontData() {
    this.landingPageService.getFrontData({
      onAfterSuccess: (data) => {
        // this.frontProduct();
        this.loading = false;
        this.setDataOnLandingPage(data);

        // const _response: any = JSON.parse(JSON.stringify(data));
        // _response.timespan = new Date().getTime();
        // // this.localStorageService.setOnStorage(LANDING_PAGE, _response);

        // const _responseCP: any = {};
        // _responseCP.count = JSON.parse(JSON.stringify(_response.countProducts));
        // _responseCP.timespan = new Date().getTime();
        // // this.localStorageService.setOnStorage(PRODUCT_COUNT, _responseCP);
      },
      onAfterFailed: () => {
        this.showStatic = true;
        // this.loadingAllProduct = false;
        this.loadingPopular = false;
        this.loadingFeatured = false;
        this.loadingServices = false;
      },
    });
  }
  setDataOnLandingPage(data: LandignPageData) {
    this.setUrlPathOnImages(data);
    this.showStatic = false;
    this.allBicons = data.bicons || [];
    this.showOnlyTwoProducts = this.allProducts.length <= 2;
    this.banners = data.banner;
    this.allArticles = data.blogRecents;
    this.countProducts = data.countProducts;
    this.servicesProducts = data.ourServices;
    this.bigBanner1 = data.promotions.filter(
      (promotion) => promotion.type === 'bigBannerPromo1'
    );
    this.bigBanner2 = data.promotions.filter(
      (promotion) => promotion.type === 'bigBannerPromo2'
    );
    this.loadingServices = false;
    this.getDataProducts();
    this.loadingPopular = false;
    this.loadingFeatured = false;
    // this.loadingAllProduct = false;
    this.loadingBestSellers = false;
  }

  setUrlPathOnImages(data: any) {
    // this.slides = [];
    // this.slides = data.carrusels.map((item) => {
    //   item.image = this.imageUrl + item.image;
    //   item.imageXs = this.imageUrl + item.imageXs;
    //   return item;
    // });
  }

  getDataProducts() {
    //   try {
    //     const pfd = this.localStorageService.getFromStorage(FRONT_PRODUCT_DATA);
    //     if (!pfd) {
    //       this.getProducts();
    //       return;
    //     }
    //     if (this.localStorageService.iMostReSearch(pfd?.timespan, environment.timeToResearchProductData)) {
    //       this.getProducts();
    //     } else {
    //       this.setValuesFromResponse(pfd);
    //     }
    //   } catch (e) {
    //   }
    //   this.allProducts = this.productDataService.allProducts;
    //   this.popularProducts = this.productDataService.popularProducts;
    //   this.featuredProducts = this.productDataService.featuredProducts;
    //   this.bestSellersProducts = this.productDataService.bestSellerProducts;
  }
}
