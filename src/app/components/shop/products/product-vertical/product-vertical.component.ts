import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductDataService, ProductService } from '../../../shared/services/product.service';
import { CurrencyService } from '../../../../core/services/currency/currency.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoggedInUserService } from '../../../../core/services/loggedInUser/logged-in-user.service';
import { UtilsService } from '../../../../core/services/utils/utils.service';

import { LocalStorageService } from '../../../../core/services/localStorage/localStorage.service';
import { FRONT_PRODUCT_DATA } from '../../../../core/classes/global.const';
import { GlobalStateOfCookieService } from '../../../../core/services/request-cookie-secure/global-state-of-cookie.service';
import { environment } from 'environments/environment';
import { BusinessConfigService } from 'src/app/core/services/business-config/business-config.service';
import { TranslateModule } from '@ngx-translate/core';
import { FooterProductCardComponent } from '../../../shared/footer-product-card/footer-product-card/footer-product-card.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-vertical',
  templateUrl: './product-vertical.component.html',
  styleUrls: ['./product-vertical.component.scss'],
  standalone: true,
  imports: [NgIf, FooterProductCardComponent, TranslateModule],
})
export class ProductVerticalComponent implements OnInit, OnDestroy {
  imageUrl = environment.imageUrl;
  language: any;
  _unsubscribeAll: Subject<any>;
  loggedInUser: any = null;

  constructor(
    private utilsService: UtilsService,
    private localStorageService: LocalStorageService,
    private productService: ProductService,
    public productDataService: ProductDataService,
    public currencyService: CurrencyService,
    public loggedInUserService: LoggedInUserService,
    private globalStateOfCookieService: GlobalStateOfCookieService,
    private appService: BusinessConfigService,
  ) {
    this._unsubscribeAll = new Subject<any>();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
  }

  ngOnInit() {
    this.globalStateOfCookieService.getCookieState()
      ? this.initComponent()
      : this.setSubscriptionToCookie();
  }

  initComponent() {
    this.loggedInUserService.$languageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.language = data.lang;
      });

    // this.productService.getPopularProduct(this.queryPopular).subscribe((data: any) => {
    //   this.popularProducts = data.data;
    // });
    //
    // this.productService.getFeaturedProducts(this.queryFeatured).subscribe((data: any) => {
    //   this.featuredProducts = data.data;
    // });
    //
    // this.productService.getAllProducts(this.queryAll).subscribe((data: any) => {
    //   this.allProducts = data.data;
    // });
    this.productService.updatedProducts$.subscribe(() => {
      if (this.appService.businessConfig?.frontDataProduct === 'normal') {
        this.setServiceGetProduct();
        this.getPFDFromStorage();
      }
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

  setServiceGetProduct() {
    // this.productService.productsData$.pipe(takeUntil(this._unsubscribeAll)).subscribe((response) => {
    //   const _response: any = JSON.parse(JSON.stringify(response));
    //   this.setValuesFromResponse(_response);
    //   _response.timespan = new Date().getTime();
    //   this.localStorageService.setOnStorage(FRONT_PRODUCT_DATA, _response);
    // });
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
  }

  getProducts() {
    this.productService.getProduct.next('');
  }

  getPFDFromStorage() {
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
    } catch (e) {
      this.getProducts();
    }
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

  ngOnDestroy() {
    if (this._unsubscribeAll) {
      this._unsubscribeAll.next(true);
      this._unsubscribeAll.complete();
      this._unsubscribeAll.unsubscribe();
    }
  }
}
