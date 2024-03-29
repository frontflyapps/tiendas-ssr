import { ConfirmPaymentOkComponent } from './confirm-payment-ok/confirm-payment-ok.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Product } from '../../modals/product.model';
import { CartItem } from '../../modals/cart-item';
import { ProductService } from '../shared/services/product.service';
import { CartService } from '../shared/services/cart.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../core/services/navigation/navigation.service';
import { LoggedInUserService } from '../../core/services/loggedInUser/logged-in-user.service';
import { distinctUntilChanged, startWith, takeUntil, map, debounceTime } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { IUser } from '../../core/classes/user.class';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { ShowSnackbarService } from '../../core/services/show-snackbar/show-snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyService } from '../../core/services/currency/currency.service';
import { FormControl, UntypedFormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoService } from '../../core/services/socket-io/socket-io.service';
import { NotificationsService } from './notification/notifications.service';
import { MyOrdersService } from '../my-orders/service/my-orders.service';
import { ShowToastrService } from 'src/app/core/services/show-toastr/show-toastr.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { SidebarMenuService } from './sidebar/sidebar-menu.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CategoriesService } from '../../core/services/categories/catagories.service';
import { ConfirmCreateBusinessComponent } from './confirm-create-business/confirm-create-business.component';
import { ConfirmCreateBusinessService } from './confirm-create-business/confirm-create-business.service';
import { DialogSetLocationComponent } from './dialog-set-location/dialog-set-location.component';
import { LOCATION } from '../../core/classes/storageNames.class';
import { LocationService } from '../../core/services/location/location.service';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { MENU_DATA } from '../../core/classes/global.const';
import { LocalStorageService } from '../../core/services/localStorage/localStorage.service';
import { GlobalStateOfCookieService } from '../../core/services/request-cookie-secure/global-state-of-cookie.service';
import Shepherd from 'shepherd.js';
import { CategoryMenuNavService } from '../../core/services/category-menu-nav.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IPagination } from '../../core/classes/pagination.class';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { environment } from 'environments/environment';
import { BusinessConfigService } from 'src/app/core/services/business-config/business-config.service';
import { MetaService } from 'src/app/core/services/meta.service';
import { ParseLangPipe } from '../../core/pipes/parse-lang.pipe';
import { FooterComponent } from '../shared/footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ShoppingWidgetsComponent } from './shopping-widgets/shopping-widgets.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { PanelNotificationsComponent } from './notification/panel-notifications/panel-notifications.component';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgIf, NgFor } from '@angular/common';
import { handleObservable } from 'src/app/core/utils/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgIf,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    NgFor,
    SidebarComponent,
    MatMenuModule,
    PanelNotificationsComponent,
    RouterLink,
    MatButtonModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    MatTooltipModule,
    ShoppingWidgetsComponent,
    MatBadgeModule,
    RouterLinkActive,
    MenuComponent,
    RouterOutlet,
    FooterComponent,
    TranslateModule,
    ParseLangPipe,
  ],
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  public sidenavMenuItems: Array<any> = [];
  _unsubscribeAll: Subject<any>;

  isOwner = false;

  public currencies: any[] = [];
  public currency: any;
  public logo = environment.logoWhite;
  urlImage: any = environment.imageUrl;

  public province: any = null;
  public municipality: any = null;
  public business: any = null;

  public flags = [
    { name: 'Español', image: 'assets/images/flags/es.svg', lang: 'es' },
    { name: 'English', image: 'assets/images/flags/en.svg', lang: 'en' },
  ];

  public flag: any;
  products: Product[] = [];
  indexProduct?: number;
  shoppingCartItems: CartItem[] = [];

  public banners = [];
  public loadingProducts = false;

  public displayOptions = {
    firthLabel: [
      {
        type: 'path',
        path: ['name', this.translate.currentLang],
      },
    ],
  };

  public urlProducts: string = environment.apiUrl + 'search';

  compareItems: any[] = [];
  compareItemsObservable: Observable<any[]> = of([]);

  public url: any;
  navItems: any[] = [];
  loggedInUser: IUser | null = null;
  @ViewChild('start', { static: true })
  public sidenav?: MatSidenav;
  searchForm: UntypedFormControl;
  categories: any[] = [];
  _language = 'es';

  tour = new Shepherd.Tour({
    useModalOverlay: false,
    defaultStepOptions: {
      classes: 'shadow-md bg-purple-dark',
      scrollTo: true,
    },
  });
  queryProduct: IPagination = {
    limit: 1000,
    total: 0,
    offset: 0,
    order: 'name',
    page: 1,
    filter: { filterText: '', properties: ['filter[$or][name][$like]'] },
  };

  public initLimit = environment.limitSearch;
  paramsSearch: any = {
    filterText: null,
    categoryIds: [],
    brandIds: [],
    rating: 0,
    minPrice: 1,
    maxPrice: null,
  };

  innerWidth: any;
  options: any;
  filteredOptions: any;

  constructor(
    public router: Router,
    private cartService: CartService,
    public translate: TranslateService,
    private navigationService: NavigationService,
    public sidenavMenuService: SidebarMenuService,
    public loggedInUserService: LoggedInUserService,
    private localStorageService: LocalStorageService,
    private showSnackbBar: ShowSnackbarService,
    private showToastr: ShowToastrService,
    private productService: ProductService,
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public notificationsService: NotificationsService,
    private currencyService: CurrencyService,
    private authService: AuthenticationService,
    private socketIoService: SocketIoService,
    private categoryService: CategoriesService,
    private orderSevice: MyOrdersService,
    private orderService: MyOrdersService,
    private metaService: MetaService,
    public utilsService: UtilsService,
    private confirmCreateBusinessService: ConfirmCreateBusinessService,
    private locationService: LocationService,
    private globalStateOfCookieService: GlobalStateOfCookieService,
    private categoryMenuServ: CategoryMenuNavService,
    public spinner: NgxSpinnerService,
    public storageService: StorageService,
    public appService: BusinessConfigService,
  ) {
    this.metaAdd();
    this._unsubscribeAll = new Subject<any>();
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();
    this.navItems = this.navigationService.getNavItems();

    this.cartService.$cartItemsUpdated.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.shoppingCartItems = this.cartService.getShoppingCars();
      const navItemCart = this.navItems.find((item) => item.id == 'cart');
      navItemCart.badgeCount = this.shoppingCartItems.length;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        this.sidenav?.close().then();
      }
    });
    this.searchForm = new FormControl(null, []);

    this.tour = new Shepherd.Tour({
      useModalOverlay: false,
      defaultStepOptions: {
        classes: 'shadow-md bg-purple-dark',
        scrollTo: true,
      },
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.globalStateOfCookieService.getCookieState()
      ? this.initComponent()
      : this.setSubscriptionToCookie();

    this.categoryMenuServ.filterText$.subscribe((item) => {
      this.searchForm.setValue(item);
    });

    this.searchForm.valueChanges
      .pipe(takeUntil(this._unsubscribeAll), debounceTime(500))
      .subscribe((value) => {
        if (value) {
          this.getFilteredOptions(value);
        }
      });
  }

  getProducts() {
    const body: any = {
      limit: this.initLimit,
      offset: this.queryProduct?.offset ? +this.queryProduct?.offset : 0,
      page: this.queryProduct?.page ? +this.queryProduct?.page : 0,
      total: this.queryProduct?.total ? +this.queryProduct?.total : 0,
      order: this.queryProduct?.order ? this.queryProduct?.order : null,
      BrandIds: null,
      currency: this.currencyService.getCurrency().code,
      CategoryIds: null,
      maxPrice: 0,
      minPrice: 0,
      tags: false,
      rating: null,
      text: this.searchForm.value ?? null,
      ProvinceId: this.province?.id || null,
      MunicipalityId: this.municipality?.id || null,
    };

    if (this.searchForm.value) {
      handleObservable(this.productService.getFinderSearch(body), {
        onBusy: (loading) => {
          this.loadingProducts = loading;
        },
        onAfterSuccess: (data) => {
          this.options = data;
          this.filteredOptions = this.searchForm.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value || '')),
          );
        },
      });
    }
  }

  getFilteredOptions(data) {
    const dataToSend = {
      limit: 10,
      value: data,
    };

    handleObservable(this.productService.getFinderSearch(dataToSend), {
      onBusy: (loading) => {
        this.loadingProducts = loading;
      },
      onAfterSuccess: (data) => {
        this.options = data;
        this.filteredOptions = this._filter(this.searchForm.value);
        // this.filteredOptions = this.searchForm.valueChanges.pipe(
        //   startWith(''),
        //   map(value => this._filter(value || '')),
        // );
      },
    });
  }

  public onSelectElement(event?: any) {
    if (this.searchForm.value?.value) {
      this.searchForm.setValue(event.option.value.value);
    }

    this.router.navigate(['/products/search'], {
      queryParams: { filterText: event.option.value.value },
    });
  }

  private _filter = (value: string): string[] => {
    let filterValue;

    if (typeof value === 'string') {
      filterValue = value.toLowerCase();
      const newArray: any[] = [];
      if (this.options) {
        this.options.forEach(function (obj) {
          const temp: string = '<strong class="resaltado">' + filterValue + '</strong>';
          obj.showValue = obj.value.replace(filterValue, temp);
          newArray.push(obj);
        });
        this.options = newArray;
        return this.options;
      } else {
        return this.options;
      }
    }
  };

  public metaAdd() {
    this.metaService.setMeta({
      title: environment.meta.mainPage.title,
      description: environment.meta.mainPage.description,
      keywords: environment.meta.mainPage.keywords,
      shareImg: environment.meta.mainPage.shareImg,
      url: environment.meta.mainPage.url,
    });
  }

  initComponent() {
    this.initSubsLocation();
    this.getLocationOnLocalStorage();

    const tempFlag = JSON.parse(this.storageService.getItem('language'));
    this.flag = tempFlag ? tempFlag : this.flags[0];
    this.currencies = this.currencyService.getCurrencies();
    this.currency = this.currencyService.getCurrency();

    this.route.queryParams.subscribe((params) => {
      this.searchForm.setValue(params.filterText);
    });

    // ///// Subscribe to events //////////
    this.loggedInUserService.$loggedInUserUpdated
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.loggedInUser = this.loggedInUserService.getLoggedInUser();

        let tempCurrency = JSON.parse(this.storageService.getItem('currency'));
        if (tempCurrency) {
          tempCurrency = this.currencies.find((item) => item.name == tempCurrency.name);
          this.currency = tempCurrency ? tempCurrency : this.currencies[0];
        } else {
          this.currency = this.currencies[0];
        }
        this.storageService.setItem('currency', JSON.stringify(this.currency));

        const defaultLanguage: any = {
          name: 'Español',
          image: 'assets/images/flags/es.svg',
          lang: 'es',
        };
        if (this.storageService.check('language')) {
          let language = JSON.parse(this.storageService.getItem('language'));
          language = language ? language : defaultLanguage;
          this.translate.setDefaultLang(language.lang);
          this.translate.use(language.lang);
        } else {
          this.translate.setDefaultLang(defaultLanguage.lang);
          this.storageService.setItem('language', JSON.stringify(defaultLanguage));
        }
        if (this.loggedInUser) {
          // this._listenToSocketIO();
        }
      });
    // //////////////////////////////////
    this.compareItemsObservable = this.productService.getComapreProducts();
    this.compareItemsObservable.pipe(takeUntil(this._unsubscribeAll)).subscribe((compareItems) => {
      this.compareItems = compareItems;
    });

    // if (localStorage.getItem('searchText')) {
    //   this.searchForm = new FormControl(JSON.parse(localStorage.getItem('searchText')), []);
    // }
    // ///////////////////////////////////////////////////////////////////////////////////
    if (this.loggedInUser) {
      // this._listenToSocketIO();
    }

    // this.getFromStorage();
    this.getMenu();

    this.loggedInUserService.$languageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this._language = data.lang;
      });

    // Open location dialog when app start
    const location = JSON.parse(this.storageService.getItem('location'));
    if (!location?.province) {
      this.openSetLocation();
    }
  }

  setSubscriptionToCookie() {
    this.globalStateOfCookieService.stateOfCookie$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((thereIsCookie: any) => {
        if (thereIsCookie) {
          this.initComponent();
        }
      });
  }

  getFromStorage(): void | boolean {
    try {
      const menuData = this.localStorageService.getFromStorage(MENU_DATA);

      if (!menuData || !menuData?.timespan) {
        this.getMenu();
        return false;
      }

      if (
        this.localStorageService.iMostReSearch(
          menuData?.timespan,
          environment.timeToResearchMenuData,
        )
      ) {
        this.getMenu();
      } else {
        this.saveCategories(menuData.menu);
      }
    } catch (e) {
      this.getMenu();
    }
  }

  /**
   * Saving categories received from API
   * @param menuData
   */
  saveCategories(menuData: Array<any>) {
    this.categories = menuData.map((object) => {
      return { ...object, active: false };
    });
    this.categoryMenuServ.setCategories(this.categories);
  }

  onSearch() {
    const searchValue = this.searchForm.value;
    this.storageService.setItem('searchText', JSON.stringify(searchValue));
    if (searchValue && searchValue.length > 1) {
      this.router
        .navigate(['/products/search'], { queryParams: { filterText: searchValue } })
        .then();
    } else {
      this.router.navigate(['/products/search']).then();
    }
  }

  ngOnDestroy(): void {
    if (this._unsubscribeAll) {
      this._unsubscribeAll.next('');
      this._unsubscribeAll.complete();
      this._unsubscribeAll.unsubscribe();
    }
    this.socketIoService.disconnect();
  }

  public changeCurrency(currency: any) {
    this.currency = currency;
    this.currencyService.setCurrency(currency);
  }

  public changeLang(flag: any) {
    this.translate.use(flag.lang);
    this.storageService.setItem('language', JSON.stringify(flag));
    this.flag = flag;
    this.loggedInUserService.$languageChanged.next(flag);
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

  onShowMyContacts(): void {
    const dialogRef = this.dialog.open(MyContactsComponent, {
      panelClass: 'app-my-contacts',
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '40rem',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  onGotoBackend() {
    document.location.href = environment.adminService;
  }

  onLogout(): void {
    handleObservable(this.authService.logout(), {
      onBusy: (val) => {
        val ? this.spinner.show() : this.spinner.hide();
      },
      onAfterSuccess: () => {
        this.loggedInUserService.setLoggedInUser(null);
        this.loggedInUserService.removeCookies();
        this.storageService.removeItem('token');
        this.storageService.removeItem('user');
        this.storageService.removeItem('cartItem');
        this.cartService.$cartItemsUpdated.next(null);
        this.loggedInUserService.$loggedInUserUpdated.next(null);
        const message = this.translate.instant('User successfully unlogged');
        this.showSnackbBar.showSucces(message, 5000);
        if (this.route.snapshot.queryParams?.cartId) {
          this.router.navigate(['']).then();
        }

        this.socketIoService.disconnect();
      },
      onAfterFailed: () => {
        const message = this.translate.instant('User sing out unsuccessfully');
        this.showSnackbBar.showError(message, 8000);
      },
    });
  }

  onChangePass() {
    this.router.navigate(['/my-account/change-pass']).then();
  }

  // ////////////// CREATE BUSINESS TRANSFERMOVIL ////////////////////////////////
  createYourBusiness() {
    const dialogRef = this.dialog.open(ConfirmCreateBusinessComponent, {
      panelClass: 'app-confirm-create-business',
      maxWidth: '100vw',
      maxHeight: '100%',
      // width: '70em',
      // height: 'auto',
      disableClose: true,
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/become-a-seller']).then();
      }
    });
  }

  // goToDigitalPlatformTransfermovil() {
  //   this.confirmCreateBusinessService
  //     .etecsaSignUp()
  //     .subscribe(dataResponse => {
  //     });
  // }

  // ///////////////////////////////////////////////////////
  _listenToSocketIO() {
    this.socketIoService
      .listen('payment-confirmed')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        if (data?.tpv !== 'enzona') {
          this.showPaymentSuccess(data.Payment.id);
        }
        this.orderSevice.$orderItemsUpdated.next('');
        this.cartService.$paymentUpdate.next('');
      });

    this.socketIoService
      .listen('payment-cancelled')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.showPaymentCancellSuccess(data.Payment.id);
        this.cartService.$paymentUpdate.next('');
        this.orderService.$orderItemsUpdated.next('');
      });

    this.socketIoService
      .listen('new-notification')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.showToastr.showInfo('Tienes nuevas notificaciones', 'Notificación', 5000);
      });

    this.socketIoService
      .listen('user-logout')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.loggedInUserService.$loggedInUserUpdated.next(null);
        this.router.navigate(['']).then();
      });

    this.socketIoService
      .listen('business-accepted')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        const token = this.loggedInUserService.getTokenCookie();
        this.authService.getProfile(token).subscribe((user) => {
          const userData = { profile: user.data, Authorization: token };
          this.loggedInUserService.updateUserProfile(userData);
        });
      });
  }

  showPaymentSuccess(id: string) {
    handleObservable(this.orderService.getPayment(id), {
      onAfterSuccess: (data) => {
        const dialogRef = this.dialog.open(ConfirmPaymentOkComponent, {
          panelClass: 'app-reservation-payment-ok',
          maxWidth: '100vw',
          maxHeight: '100vh',
          data: {
            selectedPayment: data,
            action: 'confirmed',
          },
        });
        dialogRef.afterClosed().subscribe(() => {
          window.location.reload();
        });
      },
    });
  }

  showPaymentCancellSuccess(id: string) {
    handleObservable(this.orderService.getPayment(id), {
      onAfterSuccess: (data) => {
        const dialogRef = this.dialog.open(ConfirmPaymentOkComponent, {
          panelClass: 'app-reservation-payment-ok',
          maxWidth: '100vw',
          maxHeight: '100vh',
          data: {
            selectedPayment: data,
            action: 'cancelled',
          },
        });
        dialogRef.afterClosed().subscribe(() => {
          window.location.reload();
        });
      },
    });
  }

  openSetLocation() {
    const dialogRef = this.dialog.open(DialogSetLocationComponent, {
      panelClass: 'app-dialog-set-location',
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '35rem',
      data: {
        provinceData: this.province,
        municipalityData: this.municipality,
        // businessData: this.business,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.locationService.updateLocation(result);
      }
    });
  }

  getLocationOnLocalStorage() {
    let locationOnLocalStorage;
    try {
      locationOnLocalStorage = JSON.parse(this.storageService.getItem(LOCATION));
      if (locationOnLocalStorage) {
        this.locationService.updateLocation(locationOnLocalStorage);
      }
    } catch (e) {
      console.warn('-> Error getItem storage', e);
    }
  }

  setLocationData(locationOnLocalStorage: any) {
    this.municipality = locationOnLocalStorage.municipality;
    this.province = locationOnLocalStorage.province;
    this.business = locationOnLocalStorage.business;
  }

  initSubsLocation() {
    this.locationService.location$
      .pipe(distinctUntilChanged(), takeUntil(this._unsubscribeAll))
      .subscribe((newLocation: any) => {
        this.setLocationData(newLocation);
        this.storageService.setItem(LOCATION, JSON.stringify(newLocation));
      });
  }

  private getMenu() {
    handleObservable(this.categoryService.getMenu(), {
      onAfterSuccess: (data) => {
        this.saveCategories(data);
      },
    });
  }

  ngAfterViewInit() {
    if (innerWidth >= 960) {
      this.addAttention('.info-location');
    } else {
      this.addAttention('.mobile-location');
    }
  }

  public addAttention(attentionClass: string) {
    const dialog = this.dialog;
    const storageService = this.storageService;
    const locationServ = this.locationService;

    const location = JSON.parse(this.storageService.getItem('location'));

    this.tour.addStep({
      id: 'example-step',
      text: `Los primeros resultados de búsqueda serán los productos de tiendas más cercanas a:<br><br><strong>${location
        ?.province?.name}</strong> &nbsp; ${
        location?.municipality ? location?.municipality.name : ''
      }`,
      attachTo: {
        element: attentionClass,
        on: 'bottom',
      },
      classes: 'example-step-extra-class',
      buttons: [
        {
          text: 'Olvidar',
          classes: 'forgot-button',
          action() {
            // Dismiss the tour when the forgot button is clicked
            storageService.setItem('location-attention', 'yes');
            return this.cancel();
          },
        },
        {
          text: 'Cambiar',
          action() {
            return this.hide();
          },
        },
        {
          text: 'Aceptar',
          classes: 'accept-button',
          action: this.tour.complete,
        },
      ],
      when: {
        hide: function () {
          const dialogRef = dialog.open(DialogSetLocationComponent, {
            panelClass: 'app-dialog-set-location',
            maxWidth: '100vw',
            maxHeight: '100vh',
            width: '35rem',
            data: {
              provinceData: location?.province,
              municipalityData: location?.municipality,
              businessData: location?.business,
            },
          });
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              locationServ.updateLocation(result);
            }
          });
        },
      },
    });

    // Initiate the tour
    if (!this.storageService.getItem('location-attention') && location?.province != null) {
      // this.tour.start();  //TODO start the tour
    }
  }
}
