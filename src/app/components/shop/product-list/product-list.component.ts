import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { ProductService } from '../../shared/services/product.service';
import { LoggedInUserService } from '../../../core/services/loggedInUser/logged-in-user.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
import { CurrencyService } from '../../../core/services/currency/currency.service';
import { environment } from 'environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { I18nFieldPipe } from '../../../core/pipes/i18n-field.pipe';
import { ParsePriceProduct } from '../../../core/pipes/parse-price-product.pipe';
import { ParseLangPipe } from '../../../core/pipes/parse-lang.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LazyImgDirective } from '../../../core/directives/lazy-img/lazy-img.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink,
    LazyImgDirective,
    MatTooltipModule,
    MatButtonModule,
    TranslateModule,
    ParseLangPipe,
    ParsePriceProduct,
    I18nFieldPipe,
  ],
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() products;
  inLoading = false;

  language: any;
  _unsubscribeAll: Subject<any>;
  loggedInUser: any = null;
  imageUrl = environment.imageUrl;

  pathToRedirect: any;
  paramsToUrlRedirect: any;
  isSmallDevice = false;

  constructor(
    public utilsService: UtilsService,
    private productService: ProductService,
    public spinner: NgxSpinnerService,
    public dialog: MatDialog,
    public loggedInUserService: LoggedInUserService,
    public translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    public cartService: CartService,
    public currencyService: CurrencyService,
    public breakpointObserver: BreakpointObserver,
  ) {
    this._unsubscribeAll = new Subject<any>();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';

    this.pathToRedirect = this.route.snapshot.routeConfig.path;
    this.route.queryParamMap.subscribe((params) => {
      this.paramsToUrlRedirect = { ...params };
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

  ngOnInit(): void {
    console.log(this.products);
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

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
      this.cartService.addToCart(product, quantity).then();
      this.inLoading = false;
    } else {
      this.cartService.redirectToLoginWithOrigin(this.pathToRedirect, this.paramsToUrlRedirect);
      this.inLoading = false;
    }
    // }
  }
}
