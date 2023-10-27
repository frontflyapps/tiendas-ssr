import { MetaService } from 'src/app/core/services/meta.service';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Product } from '../../../modals/product.model';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { LoggedInUserService } from 'src/app/core/services/loggedInUser/logged-in-user.service';
import { CurrencyService } from 'src/app/core/services/currency/currency.service';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// import { DialogPrescriptionComponent } from '../../shop/products/dialog-prescription/dialog-prescription.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { environment } from 'environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { GuachosRatingModule } from 'guachos-rating';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatIconModule,
    NgFor,
    MatTooltipModule,
    RouterLink,
    GuachosRatingModule,
    TranslateModule,
  ],
})
export class CompareComponent implements OnInit, OnDestroy {
  public product: Observable<any[]> = of([]);
  public products: any[] = [];

  language: any;
  _unsubscribeAll: Subject<any>;
  imageUrl = environment.imageUrl;

  ratingConfig = {
    readOnly: true,
  };
  pathToRedirect: any;
  paramsToUrlRedirect: any;
  isSmallDevice = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    public dialog: MatDialog,
    public spinner: NgxSpinnerService,
    public currencyService: CurrencyService,
    public utilsService: UtilsService,
    private router: Router,
    public loggedInUserService: LoggedInUserService,
    private metaService: MetaService,
    public route: ActivatedRoute,
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

    this.metaService.setMeta({
      title: 'Lista de Comparación',
      description: environment.meta.mainPage.description,
      keywords: environment.meta.mainPage.keywords,
      shareImg: environment.meta.mainPage.shareImg,
    });
  }

  ngOnInit() {
    this.product = this.productService.getComapreProducts();
    this.product.subscribe((products) => (this.products = products));

    this.loggedInUserService.$languageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.language = data.lang;
      });
  }

  // Add to cart
  public addToCart(product: Product, quantity = 1) {
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
    } else {
      this.cartService.redirectToLoginWithOrigin(this.pathToRedirect, this.paramsToUrlRedirect);
    }
    // }
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

  // Remove from compare list
  public removeItem(product: Product) {
    this.productService.removeFromCompare(product);
  }
}
