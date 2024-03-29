import { MetaService } from 'src/app/core/services/meta.service';
import { ShowToastrService } from '../../../../core/services/show-toastr/show-toastr.service';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CartService } from '../../../shared/services/cart.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../../modals/product.model';
import { ProductDataService, ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UtilsService } from '../../../../core/services/utils/utils.service';
import { IPagination } from '../../../../core/classes/pagination.class';
import { Observable, Subject } from 'rxjs';
import { LoggedInUserService } from '../../../../core/services/loggedInUser/logged-in-user.service';
import { CurrencyService } from '../../../../core/services/currency/currency.service';
import { debounceTime, map, startWith, takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Cart } from 'src/app/modals/cart-item';
import { BiconService } from 'src/app/core/services/bicon/bicon.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SocialMediaComponent } from './social-media/social-media.component';
import { LANDING_PAGE, PRODUCT_COUNT } from '../../../../core/classes/global.const';
import { LocalStorageService } from '../../../../core/services/localStorage/localStorage.service';
import { DialogPrescriptionComponent } from '../dialog-prescription/dialog-prescription.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { environment } from 'environments/environment';
import { BusinessConfigService } from 'src/app/core/services/business-config/business-config.service';
import { CurrencyProductPipe } from '../../../../core/pipes/currency.pipe';
import { ParsePriceProduct } from '../../../../core/pipes/parse-price-product.pipe';
import { ParseLangPipe } from '../../../../core/pipes/parse-lang.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProductCarouselTwoComponent } from '../../product-carousel-two/product-carousel-two.component';
import { PopularProductsComponent } from '../../widgets/popular-products/popular-products.component';
import { MatDividerModule } from '@angular/material/divider';
import { SkeletonLoadingCardsComponent } from '../../../shared/skeleton-loading-cards/skeleton-loading-cards.component';
import { ProductComponent } from '../product/product.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GuajiritosRating } from '@guajiritos/rating';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { LazyImgDirective } from '../../../../core/directives/lazy-img/lazy-img.directive';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgFor, NgClass, NgTemplateOutlet, DatePipe } from '@angular/common';
import { PlatformService } from 'src/app/core/services/platform/platform.service';
import Swiper from 'swiper';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    NgFor,
    NgClass,
    LazyImgDirective,
    NgxImageZoomModule,
    RouterLink,
    MatProgressSpinnerModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    GuajiritosRating,
    MatFormFieldModule,
    MatInputModule,
    NgTemplateOutlet,
    InfiniteScrollModule,
    ProductComponent,
    SkeletonLoadingCardsComponent,
    MatDividerModule,
    PopularProductsComponent,
    ProductCarouselTwoComponent,
    DatePipe,
    TranslateModule,
    ParseLangPipe,
    ParsePriceProduct,
    CurrencyProductPipe,
  ],
})
export class ProductDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  isLoading = true;
  product: any = {};
  products: any[] = [];
  relatedProduct: any;
  totalProducts: number;
  limitSearch = environment.limitSearch;
  query: IPagination = {
    limit: this.limitSearch,
    total: 0,
    offset: 0,
    order: '-updatedAt',
    page: 0,
  };
  loadingProducts = false;
  supplementArray: any;
  featuredProducts: any[] = [];

  imageUrl = environment.imageUrl;
  arrayImages: any[] = [];
  mainImage = null;
  changeImage = false;
  language: any;
  _unsubscribeAll: Subject<any>;
  loggedInUser: any = null;
  reviewForm: UntypedFormGroup;
  loadingReviews = false;
  allReviews = [];
  showZoom = false;
  public image: any;
  public counter = 1;
  index: number;

  localDatabaseUsers = environment.localDatabaseUsers;
  loadingFeatured = false;
  loadingRelated = false;
  loadingMenu = false;

  pathToRedirect: any;
  paramsToUrlRedirect: any;

  public allProductsOnMenu = [];
  public allProductsOnMenuToShow: Observable<any[]>;

  searchProductControl = new FormControl();

  url = environment.apiUrl + 'landing-page';
  loadingAvailability = false;

  queryFeatured: IPagination = {
    limit: 8,
    offset: 0,
    total: 0,
    order: '-createdAt',
  };

  queryRelated: IPagination = {
    limit: 8,
    offset: 0,
    total: 0,
    order: '-createdAt',
  };

  allBicons: any[] = [];

  queryReviews: IPagination = {
    limit: 5,
    total: 0,
    offset: 0,
    order: '-updatedAt',
    page: 1,
    filter: { filterText: '' },
  };

  indexTab = 0;
  errorPage = false;

  previewUrl: any;
  videoUrl: any;
  isSmallDevice = false;

  constructor(
    private route: ActivatedRoute,
    public productsService: ProductService,
    public currencyService: CurrencyService,
    public loggedInUserService: LoggedInUserService,
    public dialog: MatDialog,
    private router: Router,
    private biconService: BiconService,
    public utilsService: UtilsService,
    private cartService: CartService,
    private showToastr: ShowToastrService,
    public _sanitizer: DomSanitizer,
    private fb: UntypedFormBuilder,
    private metaService: MetaService,
    private _bottomSheet: MatBottomSheet,
    private localStorageService: LocalStorageService,
    private httpClient: HttpClient,
    public productDataService: ProductDataService,
    public spinner: NgxSpinnerService,
    private breakpointObserver: BreakpointObserver,
    public appService: BusinessConfigService,
    private platformService: PlatformService,
  ) {
    this._unsubscribeAll = new Subject<any>();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();

    this.spinner.show();

    this.breakpointObserver
      .observe([
        Breakpoints.Medium,
        Breakpoints.Handset,
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Tablet,
      ])
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        this.isSmallDevice = data.matches;
      });

    this.getProductProfile();
    this.cartService.$cartItemsUpdated.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      // this.spinner.show();
      this.getProductProfile('cart');
    });

    // this.route.queryParams.subscribe((query) => {
    //   const productId = query.productId;
    //   const stockId = query.stockId;
    //   this.productsService.productIdDetails = productId;
    //   this.isLoading = true;
    //   this.productsService.getProductById(productId, stockId).subscribe(
    //     (data) => {
    //       this.product = data.data;
    //       this.getProductsByBusiness(this.product?.BusinessId, this.query);
    //       this.initStateView();
    //       this.isLoading = false;
    //     },
    //     (error) => {
    //       this.isLoading = false;
    //       this.utilsService.errorHandle(error);
    //       this.errorPage = true;
    //       // this.getFeaturedProducts();
    //     },
    //   );
    // });
  }

  checkMinMaxValues(event, product): boolean {
    const currentAmountOnInput = +event.target.value;
    if (currentAmountOnInput < product?.minSale || currentAmountOnInput > product?.maxSale) {
      this.showToastr.showInfo(
        `Este producto tiene un mínimo de cantidad a vender de ${product?.minSale} y un máximo de ${product?.maxSale}`,
        'Atención',
        5000,
      );
      return false;
    } else {
      return true;
    }
  }

  initStateView() {
    this.indexTab = 0;
    this.allReviews = [];
    this.queryReviews.limit = 5;
    this.queryReviews.offset = 0;
    this.queryReviews.page = 1;
    this.counter = this.product.minSale;
    this.getReviews();
    if (this.product?.Images) {
      this.arrayImages = this.product?.Images.map((item) => {
        return { image: this.imageUrl + item.image, selected: false };
      });
      this.arrayImages[0].selected = true;
      this.mainImage = this.arrayImages[0];
    }
    this.getRelatedProducts();
    // this.getFeaturedProducts();
    // ////////////////////META///////////////////

    this.metaService.setMeta({
      title: this.product?.name?.es,
      description: this.product?.description?.es,
      keywords: this.product?.Business?.name,
      shareImg: this.imageUrl + this.product?.sharedImage,
      url: window.location.href,
    });

    // //////////////////////////////////////////
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
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

    // this.biconService.getAllBicons({ offset: 0, limit: 4, order: 'updatedAt' }).subscribe(
    //   (data) => {
    //     this.allBicons = data.data;
    //   },
    //   (error) => {
    //     this.allBicons = [];
    //   },
    // );

    this.getPFDFromStorage();

    this.reviewForm = this.fb.group({
      review: [null, [Validators.required, Validators.maxLength(250), Validators.minLength(10)]],
      rating: [3.5, Validators.required],
    });

    this.allProductsOnMenuToShow = this.searchProductControl.valueChanges.pipe(
      startWith(''),
      debounceTime(200),
      map((value) => this._filter(value)),
    );

    /// Data to redirect function///
    this.pathToRedirect = this.route.snapshot.routeConfig.path;
    this.route.queryParamMap.subscribe((params) => {
      this.paramsToUrlRedirect = { ...params };
    });
    this.spinner.hide();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

  getPFDFromStorage() {
    try {
      const lp = this.localStorageService.getFromStorage(LANDING_PAGE);

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

  setDataOnLandingPage(data) {
    this.allBicons = data.bicons || [];
    this.featuredProducts = this.productDataService.featuredProducts;
    this.loadingFeatured = false;
  }

  getFrontData() {
    this.getFrontDataRequest()
      .then((data: any) => {
        const dataResponse = JSON.parse(JSON.stringify(data.data));
        this.setDataOnLandingPage(dataResponse);

        const _response: any = JSON.parse(JSON.stringify(data.data));
        _response.timespan = new Date().getTime();
        this.localStorageService.setOnStorage(LANDING_PAGE, _response);

        const _responseCP: any = {};
        _responseCP.count = JSON.parse(JSON.stringify(_response.countProducts));
        _responseCP.timespan = new Date().getTime();
        this.localStorageService.setOnStorage(PRODUCT_COUNT, _responseCP);
      })
      .catch(() => {
        this.loadingFeatured = false;
      });
  }

  getFrontDataRequest() {
    return this.httpClient.get(this.url).toPromise();
  }

  onSelectImage(index) {
    this.arrayImages.map((item) => {
      item.selected = false;
    });
    this.arrayImages[index].selected = true;
    this.mainImage = this.arrayImages[index];
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  loadProducts() {
    if (!this.loadingProducts) {
      if (this.query.offset <= this.totalProducts) {
        this.loadingProducts = true;
        this.query.page = this.query.page + 1;
        this.query.offset = this.query.limit * this.query.page;
        this.getProductsByBusiness(this.product?.BusinessId, this.query);
      }
    }
  }

  getProductsByBusiness(businessId, query?: any) {
    this.loadingMenu = true;
    this.productsService.getProductsByBusiness(businessId, query).subscribe(
      (data: any) => {
        this.totalProducts = data?.meta?.pagination?.total;
        let temp = this.allProductsOnMenu;
        temp = temp.concat(data.data.slice());

        this.allProductsOnMenu = temp;
        const timeOut = setTimeout(() => {
          this.loadingMenu = false;
          this.loadingProducts = false;
          clearTimeout(timeOut);
        }, 200);
      },
      () => {
        const timeOut = setTimeout(() => {
          this.loadingMenu = false;
          this.loadingProducts = false;
          clearTimeout(timeOut);
        }, 200);
      },
    );
  }

  getRelatedProducts() {
    this.loadingRelated = true;
    this.productsService
      .getNewRecomendedProduct(this.product.id, 'recommended')
      .subscribe((data: any) => {
        this.relatedProduct = data.data;
        this.loadingRelated = false;
        //   const timeOut = setTimeout(() => {
        //     this.loadingRelated = false;
        //     clearTimeout(timeOut);
        //   }, 800);
      });
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  goProduct(product) {
    // const params = new URLSearchParams(productId: product?.Product?.id, stockId: product?.Product?.Stock?.id, name: item?.name?.es, product: item?.sharedImage);
    const params =
      '/product' +
      '?' +
      'productId=' +
      product?.ProductId +
      'stockId=' +
      product?.RecomendedProduct.Stocks[0]?.uuid +
      'name=' +
      product?.RecomendedProduct.name?.es +
      'sharedImage=' +
      product?.RecomendedProduct.sharedImage;
    // window.location.href = params;

    //   [queryParams]="{ productId: item?.Product?.id, stockId: item?.Product?.Stock?.id,
    //   name: item?.name?.es,
    //     sharedImage: item?.sharedImage }"
    // [routerLink]="['/product']"
  }

  initSwiper() {
    if (this.platformService.isBrowser) {
      const mainSwiper = new Swiper('.mainSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        keyboard: true,
        navigation: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        grabCursor: true,
        loop: false,
        // preloadImages: false,
        // lazy: true,
        autoplay: false,
        effect: 'fade',
      });

      mainSwiper.init();

      new Swiper('.variantSwiper', {
        slidesPerView: 7,
        spaceBetween: 20,
        keyboard: true,
        navigation: true,
        pagination: {
          clickable: true,
        },
        grabCursor: true,
        loop: false,
        // preloadImages: true,
        // lazy: true,
        autoplay: false,
        effect: 'slide',
      });
    }
  }

  downloadFile(product) {
    // const filePath = product;
    // const fileUrl = this.imageUrl + product.dataSheetUrl;
    // const fileName = product.dataSheetName;

    const link = document.createElement('a');
    link.href = this.imageUrl + product.dataSheetUrl;
    link.download = product.dataSheetName;
    link.click();
  }

  addLenses(product: any, quantity) {
    if (this.loggedInUserService.getLoggedInUser()) {
      const dialogRef = this.dialog.open(DialogPrescriptionComponent, {
        disableClose: false,
        hasBackdrop: true,
        width: this.isSmallDevice ? '100vw' : '60%',
        maxWidth: this.isSmallDevice ? '100vw' : '100vw',
        height: this.isSmallDevice ? '85vh' : '70%',
        maxHeight: this.isSmallDevice ? '85vh' : '100vh',
        data: {
          product: product,
          quantity: quantity,
        },
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.spinner.hide();
          //   this.router.navigate(['/products', result.id, result.name]).then();
        } else {
          // this.showToastr.showError('No se pudo añadir al carrito');
          this.spinner.hide();
        }
      });
    } else {
      this.cartService.redirectToLoginWithOrigin(this.pathToRedirect, this.paramsToUrlRedirect);
    }
  }

  getProductProfile(cart?: string) {
    // this.spinner.show();
    this.loadingAvailability = true;
    if (cart === 'cart') {
      this.route.queryParams.subscribe((query) => {
        const productId = query.productId;
        const stockId = query.stockId;
        this.productsService.productIdDetails = productId;
        // this.isLoading = true;
        this.productsService.getProductById(productId, stockId).subscribe(
          (data) => {
            this.loadingAvailability = false;
            this.product.Stock.quantity = data.data.Stock.quantity;
            this.spinner.hide();
            // this.product = data.data;
            // this.initStateView();
            // this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            this.loadingAvailability = false;
            this.utilsService.errorHandle(error);
            this.errorPage = true;
            this.spinner.hide();
            // this.getFeaturedProducts();
          },
        );
      });
    } else {
      this.route.queryParams.subscribe((query) => {
        const productId = query.productId;
        const stockId = query.stockId;
        this.productsService.productIdDetails = productId;
        this.isLoading = true;
        this.productsService.getProductById(productId, stockId).subscribe(
          (data) => {
            this.product = data.data;
            this.getProductsByBusiness(this.product?.BusinessId, this.query);
            this.initStateView();
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            this.utilsService.errorHandle(error);
            this.errorPage = true;
            // this.getFeaturedProducts();
          },
        );
      });
    }
  }

  // Add to cart
  public addToCart(product: any, quantity) {
    const dataToSend = {
      goToPay: false,
      addToCart: true,
      counter: this.counter,
      product: this.product,
    };
    if (this.loggedInUserService.getLoggedInUser()) {
      if (quantity === 0) {
        return false;
      }
      this.cartService.addToCart(product, Math.max(product.minSale, quantity)).then();
    } else {
      this.cartService.saveDataToAddToCart(dataToSend);
      this.cartService.redirectToLoginWithOrigin(
        this.pathToRedirect,
        this.paramsToUrlRedirect,
        dataToSend,
      );
    }
  }

  // getFeaturedProducts() {
  //   this.loadingFeatured = true;
  //   this.productsService.getFeaturedProducts(this.queryFeatured).subscribe((data: any) => {
  //     this.featuredProducts = data.data;
  //     const timeOut = setTimeout(() => {
  //       this.loadingFeatured = false;
  //       clearTimeout(timeOut);
  //     }, 800);
  //   });
  // }

  // Add to cart
  public buyNow(product: Product, quantity) {
    if (quantity > 0) {
      try {
        this.cartService.addToCart(product, parseInt(quantity, 10), true).then((carts: Cart[]) => {
          for (const cart of carts) {
            const dataFind = cart.CartItems.find((cartItemx) => cartItemx?.ProductId == product.id);
            if (dataFind != undefined) {
              const cartId = cart?.id;
              const BusinessId = cart.BusinessId;
              const cartIds = cart?.CartItems
                ? cart?.CartItems.map((i) => i.id)
                : cart.CartItems.map((i) => i.id);
              this.router
                .navigate(['/checkout'], { queryParams: { cartId, cartIds, BusinessId } })
                .then();
              return;
            }
          }
        });
      } catch (error) {
        console.warn(error);
      }
    }
  }

  public openZoomViewer() {
    // this.dialog.open(ProductZoomComponent, {
    //   data: this.mainImage,
    //   panelClass: 'zoom-dialog',
    // });
    this.showZoom = !this.showZoom;
  }

  // ////////////////////////////////////////////////////////
  onPostReview() {
    const data: any = this.reviewForm.value;
    data.ProductId = this.product.id;
    if (data.id) {
      this.productsService.editReview(data).subscribe((dataRes) => {
        this.showToastr.showSucces('Comentario editado exitósamente', 'Éxito', 3000);
        const index = this.allReviews.findIndex((item) => item.id == dataRes.data.id);
        this.allReviews[index] = dataRes.data;
        this.reviewForm.reset();
      });
    } else {
      this.productsService.createReview(data).subscribe((dataRes) => {
        this.showToastr.showSucces('Comentario creado exitósamente', 'Éxito', 3000);
        this.allReviews.unshift(dataRes.data);
        this.reviewForm.reset();
      });
    }
  }

  getReviews() {
    this.loadingReviews = true;
    this.productsService.getReviews(this.queryReviews, { ProductId: this.product?.id }).subscribe({
      next: (data) => {
        this.allReviews = this.allReviews.concat(data.data.flat());
        this.queryReviews.offset += data.meta.pagination.count;
        this.queryReviews.total = data.meta.pagination.total;
        this.loadingReviews = false;
      },
      error: () => {
        this.loadingReviews = false;
      },
    });
  }

  onGetMorePriviews() {
    this.getReviews();
  }

  onEditReview(review) {
    this.reviewForm = this.fb.group({
      review: [
        review.review,
        [Validators.required, Validators.maxLength(250), Validators.minLength(10)],
      ],
      rating: [review.rating, Validators.required],
      id: [review.id],
    });
  }

  onAddtoCartNav() {
    if (this.loggedInUserService.getLoggedInUser()) {
      // if (this.product.typeAddCart === 'glasses') {
      //   if (this.loggedInUserService.getLoggedInUser()) {
      //     const dialogRef = this.dialog.open(DialogPrescriptionComponent, {
      //       width: this.isSmallDevice ? '100vw' : '50rem',
      //       maxWidth: this.isSmallDevice ? '100vw' : '50rem',
      //       height: this.isSmallDevice ? '100vh' : '50rem',
      //       maxHeight: this.isSmallDevice ? '100vh' : '50rem',
      //       data: {
      //         product: this.product,
      //         quantity: this.counter,
      //       },
      //     });
      //     dialogRef.afterClosed().subscribe((result) => {
      //       if (result) {
      //         this.spinner.hide();
      //         //   this.router.navigate(['/products', result.id, result.name]).then();
      //       } else {
      //         // this.showToastr.showError('No se pudo añadir al carrito');
      //         this.spinner.hide();
      //       }
      //     });
      //   } else {
      //     this.cartService.redirectToLoginWithOrigin(this.pathToRedirect, this.paramsToUrlRedirect);
      //   }
      // } else {
      const dataToSend = {
        goToPay: false,
        addToCart: true,
        counter: this.counter,
        product: this.product,
      };

      if (this.loggedInUserService.getLoggedInUser()) {
        this.cartService.addToCart(this.product, this.counter).then();
      } else {
        this.cartService.saveDataToAddToCart(dataToSend);
        this.cartService.redirectToLoginWithOrigin(this.pathToRedirect, this.paramsToUrlRedirect);
      }
      // }
      this.router.navigate(['/cart']);
    }
  }

  onAddtoCompListNav() {
    // this.productsService.addToCompare(this.product);
    // this.router.navigate(['/pages/compare']);
    // let ruta = this.route.snapshot.routeConfig.path;
  }

  onGoToCheckouNav() {
    const dataToSend = {
      goToPay: true,
      addToCart: true,
      counter: this.counter,
      product: this.product,
    };
    if (this.loggedInUserService.getLoggedInUser()) {
      this.buyNow(this.product, this.counter);
    } else {
      // this.paramsToUrlRedirect.params.counter = this.counter;
      // this.paramsToUrlRedirect.goToPay = true;
      this.paramsToUrlRedirect.addToCart = true;
      this.cartService.saveDataToAddToCart(dataToSend);
      this.cartService.redirectToLoginWithOrigin(
        this.pathToRedirect,
        this.paramsToUrlRedirect,
        dataToSend,
      );
    }
  }

  onShareProduct() {
    this._bottomSheet.open(SocialMediaComponent, {
      data: {
        product: this.product,
      },
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allProductsOnMenu.filter((option) =>
      option.name.es.toLowerCase().includes(filterValue),
    );
  }
}
