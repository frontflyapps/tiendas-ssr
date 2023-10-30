import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../../../modals/product.model';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { Subject } from 'rxjs';
import { environment } from 'environments/environment';
import { CurrencyService } from '../../../../core/services/currency/currency.service';
import { LoggedInUserService } from '../../../../core/services/loggedInUser/logged-in-user.service';
import { takeUntil } from 'rxjs/operators';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BusinessConfigService } from 'src/app/core/services/business-config/business-config.service';
import { ParsePriceProduct } from '../../../../core/pipes/parse-price-product.pipe';
import { ParseLangPipe } from '../../../../core/pipes/parse-lang.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { GuajiritosRating } from '@guajiritos/rating';
import { LazyImgDirective } from '../../../../core/directives/lazy-img/lazy-img.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink,
    LazyImgDirective,
    GuajiritosRating,
    MatButtonModule,
    MatTooltipModule,
    TranslateModule,
    ParseLangPipe,
    ParsePriceProduct,
  ],
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: any;
  inLoading = false;
  _unsubscribeAll: Subject<any>;
  loggedInUser: any = null;
  imageUrl = environment.imageUrl;
  isHandset = false;
  language = 'es';
  pathToRedirect: any;
  paramsToUrlRedirect: any;
  isSmallDevice = false;

  constructor(
    private cartService: CartService,
    public productsService: ProductService,
    private wishlistService: WishlistService,
    public currencyService: CurrencyService,
    public spinner: NgxSpinnerService,
    public dialog: MatDialog,
    public loggedInUserService: LoggedInUserService,
    public utilsService: UtilsService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    public appService: BusinessConfigService,
  ) {
    this._unsubscribeAll = new Subject<any>();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
    ///Data to redirect function///
    this.pathToRedirect = this.route.snapshot.routeConfig.path;
    this.route.queryParamMap.subscribe((params) => {
      this.paramsToUrlRedirect = params;
    });
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

  /**
   * Add to shopping cart in product-card.
   * If user is logged in add product to shipping cart,
   * otherwise go to login
   * @param product
   * @param event click on the add button
   */
  public async onAddToCart(product: any, quantity = 1) {
    this.inLoading = true;

    // if (product.typeAddCart === 'glasses') {
    //   if (this.loggedInUserService.getLoggedInUser()) {
    //     const dialogRef = this.dialog.open(DialogPrescriptionComponent, {
    //       width: this.isSmallDevice ? '100vw' : '50rem',
    //       maxWidth: this.isSmallDevice ? '100vw' : '50rem',
    //       height: this.isSmallDevice ? '100vh' : '50rem',
    //       maxHeight: this.isSmallDevice ? '100vh' : '50rem',
    //       data: {
    //         product: product,
    //         quantity: quantity,
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
    if (this.loggedInUserService.getLoggedInUser()) {
      if (quantity === 0) {
        return false;
      }
      this.cartService.addToCart(product, product.PriceRanges[0].min).then();
    } else {
      this.cartService.redirectToLoginWithOrigin(this.pathToRedirect, this.paramsToUrlRedirect);
    }
    // }
    this.inLoading = false;
  }

  // Add to wishlist
  public addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
  }

  // Add to compare
  public addToCompare(product: Product) {
    this.productsService.addToCompare(product);
  }

  public openProductDialog(product) {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product,
      panelClass: 'product-dialog',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/products', result.id, result.name]);
      }
    });
  }

  public onGoToProduct(product) {
    this.router
      .navigate(['/product'], {
        queryParams: { productId: product?.id, stockId: product?.Stock?.id },
      })
      .then();
  }
}
