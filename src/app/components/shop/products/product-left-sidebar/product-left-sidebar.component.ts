import { MetaService } from '../../../../core/services/meta.service';
import { IPagination } from '../../../../core/classes/pagination.class';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CurrencyService } from '../../../../core/services/currency/currency.service';
import { LoggedInUserService } from '../../../../core/services/loggedInUser/logged-in-user.service';
import { takeUntil } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogFiltersMComponent } from '../dialog-filters-m/dialog-filters-m.component';
import { CategoriesService } from 'src/app/core/services/categories/catagories.service';
import { CartService } from '../../../shared/services/cart.service';
import { Cart } from '../../../../modals/cart-item';
import { LocationService } from '../../../../core/services/location/location.service';
import { PRODUCT_COUNT } from '../../../../core/classes/global.const';
import { LocalStorageService } from '../../../../core/services/localStorage/localStorage.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { environment } from 'environments/environment';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { CategoryMenuNavService } from 'src/app/core/services/category-menu-nav.service';
import { ParseLangPipe } from '../../../../core/pipes/parse-lang.pipe';
import { ProductComponent } from '../product/product.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PopularProductsComponent } from '../../widgets/popular-products/popular-products.component';
import { PriceComponent } from '../price/price.component';
import { BrandsComponent } from '../../widgets/brands/brands.component';
import { CategoriesComponent } from '../../widgets/categories/categories.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-left-sidebar',
  templateUrl: './product-left-sidebar.component.html',
  styleUrls: ['./product-left-sidebar.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    MatOptionModule,
    MatChipsModule,
    CategoriesComponent,
    BrandsComponent,
    PriceComponent,
    PopularProductsComponent,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    ProductComponent,
    AsyncPipe,
    TranslateModule,
    ParseLangPipe,
  ],
})
export class ProductLeftSidebarComponent implements OnInit, OnDestroy {
  public animation: any; // Animation
  public sortByOrder: any = ''; // sorting
  public page: any;
  public viewType = 'grid';
  public viewCol = 100;
  public noResults: boolean;

  public itemsOnCart = 0;
  public theCart: Cart;
  public allProducts: any[] = [];
  public allProductsSuggested: any[] = [];
  public allProductsResponse: any[] = [];
  public province: any = null;
  public municipality: any = null;
  public amountInitialResults = 3;
  public numberOfSearchBase = 0;
  public totalPages = 0;
  public totalProducts: number;
  public numberOfSearch = 0;

  public form: UntypedFormGroup;
  public allOrders = [
    {
      value: '-id',
      viewValue: 'LLegadas: Más recientes',
    },
    {
      value: 'id',
      viewValue: 'LLegadas: Menos recientes',
    },
    {
      value: 'fromPrice',
      viewValue: 'Precio: Del más bajo al más alto',
    },
    {
      value: '-fromPrice',
      viewValue: 'Precio: Del más alto al más bajo',
    },
    // {
    //   value: '-rating',
    //   viewValue: 'Opinión del cliente: Más altas',
    // },
    // {
    //   value: '-featured',
    //   viewValue: 'Destacados',
    // },
  ];
  private isStarting = true;
  resetPrices = false;
  paramsSearch: any = {
    filterText: null,
    categoryIds: [],
    brandIds: [],
    rating: 0,
    minPrice: 1,
    maxPrice: null,
  };
  categoryIdsSelected: any;
  loading = false;
  loadingSearch = false;
  language: any;
  _unsubscribeAll: Subject<any>;
  isOnlyTwoProducts = false;
  categoriesIds: any[] = [];
  brandsIds: any[] = [];
  isHandset = false;
  productId = null;
  allCategories: any[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  private isFromMoreProductBtn = false;
  private globalScrollTopS = 0;
  private globalScrollTopOth = 0;
  public initLimit = environment.limitSearch;
  pageSizeOptions: number[] = [this.initLimit, 42, 100];
  queryProduct: IPagination = {
    limit: this.initLimit,
    offset: 0,
    page: 1,
    total: 0,
    order: '-rating',
  };

  constructor(
    private productService: ProductService,
    public currencyService: CurrencyService,
    private categoryService: CategoriesService,
    private router: Router,
    public loggedInUserService: LoggedInUserService,
    private localStorageService: LocalStorageService,
    private breakpointObserver: BreakpointObserver,
    public cartService: CartService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private metaService: MetaService,
    private locationService: LocationService,
    private categoryMenuServ: CategoryMenuNavService,
    public translate: TranslateService,
    public utilsService: UtilsService,
    public storageService: StorageService,
    private fb: UntypedFormBuilder,
  ) {
    this.metaService.setMeta({
      title: 'Todos los productos',
      description: 'Encuentra lo que buscas',
      keywords: environment.meta.mainPage.keywords,
      shareImg: environment.meta.mainPage.shareImg,
    });

    this.initSubsLocation();
    this.buildForm();
    this._unsubscribeAll = new Subject<any>();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
    this.route.queryParams.pipe(takeUntil(this._unsubscribeAll)).subscribe((data) => {
      this.isStarting = true;
      // this.paramsSearch.categoryIds = data?.categoryIds ? data.categoryIds : this.paramsSearch.categoryIds;
      this.paramsSearch.categoryIds = data?.categoryIds ? data.categoryIds : [];
      this.paramsSearch.brandIds = data?.brandIds ? data.brandIds : [];
      this.paramsSearch.minPrice = data?.minPrice ? data.minPrice : 0;
      this.paramsSearch.maxPrice = data?.maxPrice ? data.maxPrice : null;

      this.productId = this.productService.productIdDetails
        ? this.productService.productIdDetails
        : null;

      this.queryProduct.limit = data?.limit ? data.limit : this.initLimit;
      this.queryProduct.offset = data?.offset ? data.offset : 0;
      this.queryProduct.total = data?.total ? data.total : 0;
      this.queryProduct.page = data?.page ? data.page : 1;
      this.queryProduct.order = data?.order ? data.order : '-id';
      this.form.get('order').setValue(data?.order ? data.order : null);
      // this.onSelectOrder(data?.order ? data.order : '-id');

      if (data.CategoryId) {
        this.paramsSearch.categoryIds = [data.CategoryId];
        this.paramsSearch.minPrice = 0;
        this.paramsSearch.maxPrice = null;
        this.resetPrices = !this.resetPrices;

        this.queryProduct.limit = this.initLimit;
        this.queryProduct.offset = 0;
        this.queryProduct.total = 0;
        this.queryProduct.page = 1;
      }
      if (this.paramsSearch.filterText != data.filterText) {
        this.paramsSearch.filterText = data.filterText;
        this.paramsSearch.minPrice = 0;
        this.paramsSearch.maxPrice = null;
        this.queryProduct.order = '-id';
        this.form.get('order').setValue(null);
        this.resetPrices = !this.resetPrices;

        if (this.paramsSearch.filterText) {
          this.queryProduct.limit = this.initLimit;
          this.queryProduct.offset = 0;
          this.queryProduct.total = 0;
          this.queryProduct.page = 1;
          this.paramsSearch.categoryIds = [];
        }
      }

      if (this.paramsSearch.categoryIds?.length > 0) {
        this.paramsSearch.filterText = null;

        this.categoryMenuServ.setFilterText(this.paramsSearch.filterText);

        this.storageService.setItem('searchText', JSON.stringify(null));
      }

      this.categoriesIds = [...this.paramsSearch.categoryIds];
      this.brandsIds = [...this.paramsSearch.brandIds];

      if (this.isFromMoreProductBtn && this.amountInitialResults < this.numberOfSearch) {
        this.isFromMoreProductBtn = false;
        setTimeout(() => {
          document.body.scrollTop = this.globalScrollTopS; // Safari
          document.documentElement.scrollTop = this.globalScrollTopOth; // Other
        }, 0);
      } else {
        this.loading = true;
      }

      this.newSearchMethod(this.queryProduct.page);
    });
  }

  ngOnInit() {
    this.subsCartChange();

    this.loggedInUserService.$languageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.language = data.lang;
      });

    this.currencyService.$currencyUpdated.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.newSearchMethod(0);
      this.infiniteScrollSearchMethod();
    });

    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        this.isHandset = data.matches;
      });

    this.categoryService
      .getAllCategories()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        // this.allCategories = data.data;
        this.categoryService.allCategories = data.data;
      });

    this.getPFDFromStorage();
  }

  getPFDFromStorage() {
    try {
      const count = this.localStorageService.getFromStorage(PRODUCT_COUNT);

      if (!count) {
        this.getProductCount();
        return;
      }

      if (
        this.localStorageService.iMostReSearch(
          count?.timespan,
          environment.timeToResearchProductData,
        )
      ) {
        this.getProductCount();
      } else {
        this.setIsOnlyTwoProducts(count);
      }
    } catch (e) {
      this.getProductCount();
    }
  }

  getProductCount() {
    this.productService.getCountProduct().subscribe((data) => {
      const _response: any = {};
      _response.count = JSON.parse(JSON.stringify(data.data.count));
      _response.timespan = new Date().getTime();
      this.localStorageService.setOnStorage(PRODUCT_COUNT, _response);
      this.setIsOnlyTwoProducts(_response.count);
    });
  }

  private buildForm() {
    this.form = this.fb.group({
      order: [null, []],
    });
  }

  public onSelectOrder(event) {
    this.queryProduct.order = event;
    // this.form.get('order').setValue(event);
    this.initValuesOnSearch();
    this.searchProducts();
  }

  setIsOnlyTwoProducts(count) {
    this.isOnlyTwoProducts = count <= 2;
  }

  initValuesOnSearch() {
    this.queryProduct.limit = environment.limitSearch;
    this.queryProduct.offset = 0;
    this.queryProduct.page = 1;
    this.numberOfSearch = this.numberOfSearchBase;
  }

  subsCartChange() {
    this.cartService.$cartItemsUpdated.pipe(takeUntil(this._unsubscribeAll)).subscribe((carts) => {
      this.itemsOnCart = carts[0]?.CartItems?.length || 0;
      this.theCart = carts[0];
    });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
    this._unsubscribeAll.unsubscribe();
  }

  // ////////////////////////// BUSQUEDA ////////////////////////////////

  searchProducts() {
    this.loading = true;
    this.isStarting = true;

    this.router
      .navigate(['/products/search'], {
        queryParams: {
          resfreshId: Math.random(),
          ...this.paramsSearch,
          ...this.queryProduct,
        },
      })
      .then();
    // this.router.onSameUrlNavigation = 'reload';
  }

  // searchMoreProducts() {
  //   // this.loading = true;
  //   this.isFromMoreProductBtn = true;
  //
  //   // this.router
  //   //   .navigate(['/products/search'], {
  //   //     queryParams: {
  //   //       ...this.paramsSearch,
  //   //       ...this.queryProduct,
  //   //     },
  //   //   })
  //   //   .then(() => (this.loading = false));
  //
  //   this.search();
  // }

  // search() {
  //   this.loading = true;
  //   let brandIds: number[] = null;
  //   let categoryIds: number[] = null;
  //
  //   if (this.paramsSearch.categoryIds) {
  //     if (Array.isArray(this.paramsSearch.categoryIds)) {
  //       if (this.paramsSearch.categoryIds.length > 0) {
  //         categoryIds = this.paramsSearch.categoryIds.map((i) => Number(i));
  //       }
  //     } else {
  //       categoryIds = [this.paramsSearch.categoryIds];
  //     }
  //   }
  //
  //   // if (Array.isArray(this.paramsSearch.brandIds) && this.paramsSearch.brandIds.length > 0) {
  //   if (this.paramsSearch.categoryIds) {
  //     if (Array.isArray(this.paramsSearch.brandIds)) {
  //       if (this.paramsSearch.brandIds.length > 0) {
  //         brandIds = this.paramsSearch.brandIds.map((i) => Number(i));
  //       }
  //     } else {
  //       brandIds = [this.paramsSearch.brandIds];
  //     }
  //   }
  //
  //   const body: any = {
  //     limit: this.queryProduct?.limit ? +this.queryProduct?.limit : 0,
  //     offset: this.queryProduct?.offset ? +this.queryProduct?.offset : 0,
  //     page: this.queryProduct?.page ? +this.queryProduct?.page : 0,
  //     total: this.queryProduct?.total ? +this.queryProduct?.total : 0,
  //     order: this.queryProduct?.order ? this.queryProduct?.order : null,
  //     BrandIds: brandIds,
  //     CategoryIds: categoryIds,
  //     maxPrice: this.paramsSearch?.maxPrice ? +this.paramsSearch?.maxPrice : 0,
  //     minPrice: this.paramsSearch?.minPrice ? +this.paramsSearch?.minPrice : 0,
  //     rating: this.paramsSearch?.rating ? +this.paramsSearch?.rating : null,
  //     text: this.paramsSearch?.filterText ? this.paramsSearch?.filterText : null,
  //     ProvinceId: this.province?.id || null,
  //     MunicipalityId: this.municipality?.id || null,
  //   };
  //   this.productService
  //     .searchProduct(body)
  //     .pipe(takeUntil(this._unsubscribeAll))
  //     .subscribe(
  //       (data: any) => {
  //         if (this.isStarting) {
  //           this.allProducts = [];
  //           this.allProducts = data.data.slice(0, this.initLimit * (this.numberOfSearch + 1));
  //           this.allProductsResponse = data.data;
  //           this.noResults = data.info;
  //           this.isStarting = false;
  //           setTimeout(() => {
  //             document.body.scrollTop = 0; // Safari
  //             document.documentElement.scrollTop = 0; // Other
  //           }, 0);
  //         } else {
  //           this.allProductsResponse = this.allProductsResponse.concat(data.data);
  //           this.allProducts = this.allProductsResponse.slice(0, this.initLimit * (this.numberOfSearch + 1));
  //         }
  //
  //         this.queryProduct.total = data.meta.pagination.total;
  //         this.loading = false;
  //         this.gotToProductId();
  //       },
  //       () => {
  //         this.loading = false;
  //       },
  //     );
  // }

  showChips() {
    const chips = [];

    let allCategories = this.categoryService?.allCategories;

    if (!Array.isArray(allCategories)) {
      allCategories = [];
    }

    for (const cat of allCategories) {
      const a = this.categoriesIds.find((i) => i == cat.id);
      if (a) {
        chips.push(cat);
      }
    }
    return chips;
  }

  onRemoveCategory(cat) {
    const x = this.categoriesIds.findIndex((x) => x == cat.id);
    if (x > -1) {
      this.categoriesIds.splice(x, 1);
      this.onCategoriesChanged([...this.categoriesIds]);
    }
  }

  // /////////////////////////////////////////////////////////////////

  public changeViewType(viewType, viewCol) {
    this.viewType = viewType;
    this.viewCol = viewCol;
  }

  // Animation Effect fadeIn
  public fadeIn() {
    this.animation = 'fadeIn';
  }

  // Animation Effect fadeOut
  public fadeOut() {
    this.animation = 'fadeOut';
  }

  // Update tags filter
  public updateTagFilters() {
    this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

  // sorting type ASC / DESC / A-Z / Z-A etc.

  onSetOrder(order) {
    this.queryProduct.order = order;
    this.initValuesOnSearch();
    this.searchProducts();
  }

  goToFirstPage(event) {
    // this.isStarting = true;
    event.preventDefault();

    // this.globalScrollTopS = document.body.scrollTop; // Safari
    // this.globalScrollTopOth = document.documentElement.scrollTop; // Other

    setTimeout(() => {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Other
    }, 0);
  }

  getCountPage(total) {
    return total % this.initLimit
      ? Math.ceil(total / this.initLimit)
      : total / this.initLimit > 0
      ? total / this.initLimit
      : 1;
  }
  newSearchMethod(page) {
    this.loadingSearch = true;
    const currentPage = page > 0 ? page - 1 : page;
    this.queryProduct.page = currentPage;
    this.queryProduct.offset = currentPage * this.initLimit;
    // this.searchMoreProducts();
    let brandIds: number[] = null;
    let categoryIds: number[] = null;

    if (this.paramsSearch.categoryIds) {
      if (Array.isArray(this.paramsSearch.categoryIds)) {
        if (this.paramsSearch.categoryIds.length > 0) {
          categoryIds = this.paramsSearch.categoryIds.map((i) => Number(i));
          this.paramsSearch.filterText = null;

          this.categoryMenuServ.setFilterText(this.paramsSearch.filterText);

          this.storageService.setItem('searchText', JSON.stringify(null));
        }
      } else {
        categoryIds = [this.paramsSearch.categoryIds];
      }
    }

    // if (Array.isArray(this.paramsSearch.brandIds) && this.paramsSearch.brandIds.length > 0) {
    if (this.paramsSearch.brandIds) {
      if (Array.isArray(this.paramsSearch.brandIds)) {
        if (this.paramsSearch.brandIds.length > 0) {
          brandIds = this.paramsSearch.brandIds.map((i) => Number(i));
        }
      } else {
        brandIds = [this.paramsSearch.brandIds];
      }
    }

    const body: any = {
      limit: this.initLimit,
      offset: this.queryProduct?.offset ? +this.queryProduct?.offset : 0,
      page: this.queryProduct?.page ? +this.queryProduct?.page : 0,
      total: this.queryProduct?.total ? +this.queryProduct?.total : 0,
      order: this.queryProduct?.order ? this.queryProduct?.order : null,
      BrandIds: brandIds,
      currency: this.currencyService.getCurrency().code,
      CategoryIds: categoryIds,
      tags: true,
      maxPrice: this.paramsSearch?.maxPrice ? +this.paramsSearch?.maxPrice : 0,
      minPrice: this.paramsSearch?.minPrice ? +this.paramsSearch?.minPrice : 0,
      rating: this.paramsSearch?.rating ? +this.paramsSearch?.rating : null,
      text: this.paramsSearch?.filterText ? this.paramsSearch?.filterText : null,
      ProvinceId: this.province?.id || null,
      MunicipalityId: this.municipality?.id || null,
    };
    // this.router
    //   .navigate(['/products/search'], {
    //     queryParams: {
    //       resfreshId: Math.random(),
    //       ...this.paramsSearch,
    //       ...this.queryProduct,
    //     },
    //   }).then();
    this.productService
      .searchProduct(body)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (data: any) => {
          // this.loading = true;

          if (this.form.get('order').value == null) {
            this.filterProducts(body.text, data.data);
          }

          this.allProducts = data.data;
          if (data?.suggested) {
            this.allProductsSuggested = data.suggested;
          }
          this.allProductsResponse = data.data;
          this.totalPages = data.meta.total / this.initLimit;
          this.totalProducts = data.meta.pagination.total;
          if (data.meta.total % this.initLimit) {
            this.totalPages++;
          }
          setTimeout(() => {
            document.body.scrollTop = 0; // Safari
            document.documentElement.scrollTop = 0; // Other
          }, 0);

          this.queryProduct.total = data.meta.pagination.total;
          this.loading = false;
          this.loadingSearch = false;
          this.gotToProductId();
        },
        () => {
          this.loading = false;
          this.loadingSearch = false;
        },
      );
  }
  infiniteScrollSearchMethod() {
    if (this.loading === false) {
      this.loading = true;
      // let currentPage = page > 0 ? page - 1 : page;
      // this.queryProduct.page = currentPage;
      if (
        this.queryProduct.offset < this.queryProduct.total &&
        this.queryProduct.total - this.queryProduct.offset >= this.initLimit
      ) {
        this.queryProduct.offset = this.initLimit + this.queryProduct.offset;
        let brandIds: number[] = null;
        let categoryIds: number[] = null;

        if (this.paramsSearch.categoryIds) {
          if (Array.isArray(this.paramsSearch.categoryIds)) {
            if (this.paramsSearch.categoryIds.length > 0) {
              categoryIds = this.paramsSearch.categoryIds.map((i) => Number(i));
            }
          } else {
            categoryIds = [this.paramsSearch.categoryIds];
          }
        }

        // if (Array.isArray(this.paramsSearch.brandIds) && this.paramsSearch.brandIds.length > 0) {
        if (this.paramsSearch.categoryIds) {
          if (Array.isArray(this.paramsSearch.brandIds)) {
            if (this.paramsSearch.brandIds.length > 0) {
              brandIds = this.paramsSearch.brandIds.map((i) => Number(i));
            }
          } else {
            brandIds = [this.paramsSearch.brandIds];
          }
        }

        const body: any = {
          limit: this.initLimit,
          offset: this.queryProduct?.offset ? this.queryProduct?.offset : 0,
          page: this.queryProduct?.page ? +this.queryProduct?.page : 0,
          total: this.queryProduct?.total ? +this.queryProduct?.total : 0,
          order: this.queryProduct?.order ? this.queryProduct?.order : null,
          currency: this.currencyService.getCurrency().code,
          BrandIds: brandIds,
          CategoryIds: categoryIds,
          tags: true,
          maxPrice: this.paramsSearch?.maxPrice ? +this.paramsSearch?.maxPrice : 0,
          minPrice: this.paramsSearch?.minPrice ? +this.paramsSearch?.minPrice : 0,
          rating: this.paramsSearch?.rating ? +this.paramsSearch?.rating : null,
          text: this.paramsSearch?.filterText ? this.paramsSearch?.filterText : null,
          ProvinceId: this.province?.id || null,
          MunicipalityId: this.municipality?.id || null,
        };
        this.productService
          .searchProduct(body)
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(
            (data: any) => {
              this.allProducts = this.allProducts.concat(data.data);

              if (data?.suggested) {
                this.allProductsSuggested = this.allProductsSuggested.concat(data.suggested);
              }
              this.allProductsResponse = this.allProductsResponse.concat(data.data);
              this.totalPages = data.meta.total / this.initLimit;
              this.totalProducts = data.meta.pagination.total;
              if (data.meta.total % this.initLimit) {
                this.totalPages++;
              }
              setTimeout(() => {
                // document.body.scrollTop = 0; // Safari
                // document.documentElement.scrollTop = 0; // Other
              }, 0);

              this.queryProduct.total = data.meta.pagination.total;
              this.loading = false;
              this.gotToProductId();
            },
            () => {
              this.loading = false;
            },
          );
      } else if (this.queryProduct.offset < this.queryProduct.total - 1) {
        this.queryProduct.offset = this.queryProduct.total;
        let brandIds: number[] = null;
        let categoryIds: number[] = null;

        if (this.paramsSearch.categoryIds) {
          if (Array.isArray(this.paramsSearch.categoryIds)) {
            if (this.paramsSearch.categoryIds.length > 0) {
              categoryIds = this.paramsSearch.categoryIds.map((i) => Number(i));
            }
          } else {
            categoryIds = [this.paramsSearch.categoryIds];
          }
        }

        // if (Array.isArray(this.paramsSearch.brandIds) && this.paramsSearch.brandIds.length > 0) {
        if (this.paramsSearch.categoryIds) {
          if (Array.isArray(this.paramsSearch.brandIds)) {
            if (this.paramsSearch.brandIds.length > 0) {
              brandIds = this.paramsSearch.brandIds.map((i) => Number(i));
            }
          } else {
            brandIds = [this.paramsSearch.brandIds];
          }
        }

        const body: any = {
          limit: this.initLimit,
          offset: this.queryProduct?.offset ? this.queryProduct?.offset : 0,
          page: this.queryProduct?.page ? +this.queryProduct?.page : 0,
          total: this.queryProduct?.total ? +this.queryProduct?.total : 0,
          order: this.queryProduct?.order ? this.queryProduct?.order : null,
          currency: this.currencyService.getCurrency().code,
          BrandIds: brandIds,
          CategoryIds: categoryIds,
          tags: true,
          maxPrice: this.paramsSearch?.maxPrice ? +this.paramsSearch?.maxPrice : 0,
          minPrice: this.paramsSearch?.minPrice ? +this.paramsSearch?.minPrice : 0,
          rating: this.paramsSearch?.rating ? +this.paramsSearch?.rating : null,
          text: this.paramsSearch?.filterText ? this.paramsSearch?.filterText : null,
          ProvinceId: this.province?.id || null,
          MunicipalityId: this.municipality?.id || null,
        };
        this.productService
          .searchProduct(body)
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(
            (data: any) => {
              if (data.data) {
                this.allProducts = this.allProducts.concat(data.data);
                this.allProductsResponse = this.allProductsResponse.concat(data.data);
              }

              if (data?.suggested) {
                this.allProductsSuggested = this.allProductsSuggested.concat(data.suggested);
              }

              this.totalPages = data.meta.total / this.initLimit;
              this.totalProducts = data.meta.pagination.total;
              if (data.meta.total % this.initLimit) {
                this.totalPages++;
              }
              setTimeout(() => {
                // document.body.scrollTop = 0; // Safari
                // document.documentElement.scrollTop = 0; // Other
              }, 0);

              this.queryProduct.total = data.meta.pagination.total;
              this.loading = false;
              this.gotToProductId();
            },
            () => {
              this.loading = false;
            },
          );
      } else {
        this.loading = false;
      }
    }
    // this.loading = false;
  }

  // seeMoreProductsBtn(event) {
  //   event.preventDefault();
  //
  //   this.globalScrollTopS = document.body.scrollTop; // Safari
  //   this.globalScrollTopOth = document.documentElement.scrollTop; // Other
  //
  //   this.numberOfSearch++;
  //   if (this.numberOfSearch % 3 > 0) {
  //     this.allProducts = this.allProductsResponse.slice(0, this.initLimit * (this.numberOfSearch + 1));
  //     this.queryProduct.offset = this.initLimit;
  //   } else {
  //     // this.numberOfSearch = this.numberOfSearchBase;
  //     this.queryProduct.page++;
  //     this.queryProduct.offset = this.initLimit * this.amountInitialResults * this.queryProduct.page;
  //     this.searchMoreProducts();
  //   }
  // }

  private filterProducts(name: string, arrProducts: any[]) {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    let newArrayProducts = [];

    if (arrProducts !== undefined && arrProducts) {
      if (arrProducts.length === 0) {
        this.allProducts = newArrayProducts;
      } else {
        arrProducts.forEach((product) => {
          const arrTemp1 = product.name.es.split(' ')[0].toLowerCase();
          let arrTemp2: any[] = product.name.es.split(' ');
          let temp = [];
          if (arrTemp2.includes('Combo')) {
            arrTemp2 = arrTemp2.map((item) => item.toLowerCase());
            temp = arrTemp2.filter((elemento) => elemento.includes('arroz'));
          }
          arrTemp2.shift();
          arrTemp2 = arrTemp2.map((item) => item.toLowerCase());

          if (arrTemp1 === name) {
            arr1.push(product);
          } else if (arrTemp2.includes(name) || temp.length > 0) {
            arr2.push(product);
          } else {
            arr3.push(product);
          }
        });
        newArrayProducts = [...arr1, ...arr2, ...arr3];
      }
    } else {
      this.allProducts = newArrayProducts;
    }

    // let newArrayProducts = [];
    // arrProducts.forEach((product) => {
    //   if (product.name.es.split(' ')[0].toLowerCase() === name) {
    //     newArrayProducts.push(product);
    //   }
    // });
    // arrProducts.forEach((product) => {
    //   let arr: any[] = product.name.es.split(' ');
    //   arr.shift();
    //   if (arr.includes(name)) {
    //     newArrayProducts.push(product);
    //   }
    // });
    //
    // arrProducts.forEach((product) => {
    //   if (product.tags) {
    //     product.tags.forEach(item => {
    //       if (item === name) {
    //         newArrayProducts.push(product);
    //       }
    //     });
    //   }
    //
    //
    //   // if (product.name.es.split(' ')[0].toLowerCase() === name) {
    //   //   newArrayProducts.push(product);
    //   // }
    // });
    this.allProducts = newArrayProducts;
  }

  OnPaginatorChange(event) {
    if (event) {
      this.queryProduct.limit = event.pageSize || this.initLimit;
      this.queryProduct.offset = event.pageIndex * event.pageSize;
      this.queryProduct.page = event.pageIndex;
    } else {
      this.queryProduct.limit = this.initLimit;
      this.queryProduct.offset = 0;
      this.queryProduct.page = 1;
    }
    this.searchProducts();
    // const element = document.getElementById('topSearchBar');
    // element.scrollIntoView(true);
  }

  // Update price filter
  updatePriceFilters(price: any) {
    this.paramsSearch.minPrice = price.priceFrom;
    this.paramsSearch.maxPrice = price.priceTo;
    this.queryProduct.limit = this.initLimit;
    this.queryProduct.offset = 0;
    this.queryProduct.total = 0;

    // this.allProducts = [];
    setTimeout(() => {
      this.searchProducts();
    }, 250);
  }

  onChangeRating() {
    this.queryProduct.offset = 0;
    this.queryProduct.total = 0;
    this.allProducts = [];
    this.totalProducts = 0;
    this.allProductsResponse = [];
    this.allProductsSuggested = [];
    this.initValuesOnSearch();
    // this.paginator.firstPage();
    setTimeout(() => {
      this.searchProducts();
    }, 150);
  }

  // Update Brands filter
  onBrandsChanged(brandIds) {
    this.paramsSearch.brandIds = brandIds;
    this.queryProduct.limit = this.initLimit;
    this.queryProduct.offset = 0;
    this.queryProduct.total = 0;

    // this.allProducts = [];
    this.initValuesOnSearch();
    // this.paginator.firstPage();
    setTimeout(() => {
      this.searchProducts();
    }, 150);
  }

  // Update Categories filter
  onCategoriesChanged(categoryIds) {
    this.paramsSearch.categoryIds = categoryIds;

    if (this.paramsSearch.categoryIds?.length > 0) {
      this.paramsSearch.filterText = null;

      this.categoryMenuServ.setFilterText(this.paramsSearch.filterText);

      this.storageService.setItem('searchText', JSON.stringify(null));
    }

    this.queryProduct.limit = this.initLimit;
    this.queryProduct.offset = 0;
    this.queryProduct.total = 0;
    // this.allProducts = [];
    this.initValuesOnSearch();
    // this.paginator.firstPage();
    setTimeout(() => {
      this.searchProducts();
    }, 150);
  }

  //////////////////////////
  gotToProductId() {
    if (this.productId) {
      setTimeout(() => {
        const element = document.getElementById(`ProductCardId${this.productId}`);
        if (element) {
          element.scrollIntoView(false);
          this.productService.productIdDetails = undefined;
        }
      });
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';
    const dialogRef = this.dialog.open(DialogFiltersMComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.paramsSearch = { ...data.paramsSearch };
        this.queryProduct = { ...data.queryProduct };
        this.searchProducts();
      }
    });
  }

  // ============= LOCATION ==================================
  initSubsLocation() {
    this.locationService.location$.subscribe((newLocation) => {
      const nowLocation = JSON.parse(this.storageService.getItem('location'));
      this.setLocationData(newLocation);
      if (newLocation) {
        if (
          nowLocation?.province?.id !== newLocation.province?.id ||
          nowLocation?.municipality?.id !== newLocation.municipality?.id
        ) {
          this.allProducts = [];
          this.allProductsSuggested = [];
          this.allProductsResponse = [];
          this.totalProducts = 0;
          this.searchProducts();
        }
      }
    });
  }

  setLocationData(locationOnLocalStorage) {
    this.municipality = locationOnLocalStorage.municipality;
    this.province = locationOnLocalStorage.province;
  }
}
