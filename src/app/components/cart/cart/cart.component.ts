import { MetaService } from 'src/app/core/services/meta.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart, CartItem } from '../../../modals/cart-item';
import { CurrencyService } from '../../../core/services/currency/currency.service';
import { LoggedInUserService } from '../../../core/services/loggedInUser/logged-in-user.service';
import { takeUntil } from 'rxjs/operators';
import { CartService } from '../../shared/services/cart.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { Router, RouterLink } from '@angular/router';
import { ShowToastrService } from '../../../core/services/show-toastr/show-toastr.service';
import { environment } from 'environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { CurrencyMarket } from '../../../core/pipes/currency-market.pipe';
import { ParsePriceProduct } from '../../../core/pipes/parse-price-product.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    RouterLink,
    MatProgressSpinnerModule,
    NgFor,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    AsyncPipe,
    TranslateModule,
    ParsePriceProduct,
    CurrencyMarket,
  ],
})
export class CartComponent implements OnInit, OnDestroy {
  public shoppingCartItems: CartItem[] = [];
  public carts: Cart[] = [];
  inLoading = false;
  language: any;
  _unsubscribeAll: Subject<any>;
  imageUrl = environment.imageUrl;
  loggedInUser: any = null;

  public itemsOnCart = 0;
  defaultDigitalQuantity: any = 1;

  constructor(
    public cartService: CartService,
    public currencyService: CurrencyService,
    public utilsService: UtilsService,
    public loggedInUserService: LoggedInUserService,
    public utilsServ: UtilsService,
    private router: Router,
    private metaService: MetaService,
    private showToastr: ShowToastrService,
    private spinner: NgxSpinnerService,
  ) {
    this._unsubscribeAll = new Subject<any>();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();

    this.metaService.setMeta({
      title: 'Carrito de compras',
      description: environment.meta.mainPage.description,
      keywords: environment.meta.mainPage.keywords,
      shareImg: environment.meta.mainPage.shareImg,
    });
  }

  ngOnInit() {
    this.loggedInUserService.$loggedInUserUpdated
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.loggedInUser = this.loggedInUserService.getLoggedInUser();
        // if (this.loggedInUser) {
        //   this.cartService.getCart().then((dataCart: any) => {
        //     this.carts = dataCart.data;
        //   });
        // } else {
        //   this.carts = [...this.cartService.getCartNoLogged()];
        //
        //   this.clearCartTimeData();
        // }
      });

    // if (this.loggedInUser) {
    //   this.cartService.getCart().then((dataCart: any) => {
    //     this.carts = dataCart.data;
    //   });
    // } else {
    //   this.carts = [...this.cartService.getCartNoLogged()];
    //
    //   this.clearCartTimeData();
    // }

    this.loggedInUserService.$languageChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {
        this.language = data.lang;
      });

    this.cartService.$cartItemsUpdated.pipe(takeUntil(this._unsubscribeAll)).subscribe((_carts) => {
      if (this.loggedInUser) {
        this.carts = [..._carts];
      } else {
        this.carts = [...this.cartService.getCartNoLogged()];

        this.clearCartTimeData();
      }
    });

    this.subsCartChange();
  }

  clearCartTimeData() {
    this.cartService.dateCreatedAtCart = '';
    this.cartService.cartExpiredTime = '';
    this.cartService.setCartInPaying(false);
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

  subsCartChange() {
    this.spinner.show();
    this.cartService.$cartItemsUpdated.pipe(takeUntil(this._unsubscribeAll)).subscribe((carts) => {
      this.spinner.hide();
      this.itemsOnCart = carts[0]?.CartItems?.length || 0;
      // this.theCart = carts[0];
    });
  }

  // Remove cart items
  public removeItem(item: CartItem) {
    this.spinner.show();
    this.inLoading = true;
    this.cartService
      .removeFromCart(item)
      .then(() => {
        this.spinner.hide();
        this.inLoading = false;
      })
      .catch(() => {
        this.spinner.hide();
        this.inLoading = false;
      });
  }

  // Increase Product Quantity
  public increment(product: any, quantity = 1) {
    this.spinner.show();
    this.inLoading = true;
    const productToIncrease = product.Product;
    productToIncrease.Stock = product?.Stock;
    this.cartService
      .addToCart(productToIncrease, quantity)
      .then(() => {
        this.spinner.hide();
        this.inLoading = false;
      })
      .catch(() => {
        this.spinner.hide();
        this.inLoading = false;
      });
  }

  // Decrease Product Quantity
  public decrement(product: any, quantity = -1) {
    this.spinner.show();
    const productToDecrease = product.Product;
    productToDecrease.Stock = product.Stock;
    this.cartService
      .addToCart(productToDecrease, quantity)
      .then(() => {
        this.spinner.hide();
        this.inLoading = false;
      })
      .catch(() => {
        this.spinner.hide();
        this.inLoading = false;
      });
  }

  // Get Total
  public getTotal(cart?): any {
    return this.cartService.getTotalAmount(cart);
  }

  public getTotalPricePerItem(item: CartItem) {
    const price = this.cartService.getPriceofProduct(item.Product, item.quantity);
    return price * item.quantity;
  }

  public goToCheckout(cart: Cart, cartITems?) {
    const cartId = cart.id;
    const BusinessId = cart.BusinessId;
    const cartIds = cartITems ? cartITems.map((i) => i.id) : cart.CartItems.map((i) => i.id);
    this.router.navigate(['/checkout'], { queryParams: { cartId, cartIds, BusinessId } }).then();
  }

  /**
   *
   * @param event object with the number typed on keyCode prop
   * @param product product to affect
   */
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

  /**
   * Check if can write the number about the amount of product
   * @param event object with the number typed on keyCode prop
   * @param itemCart itemCart to take the affect
   *
   */

  // eslint-disable-next-line
  addAmountSale(event, itemCart) {
    // const amountTyped = +event.target.value;
    // const dataToSend = 2;
    // if ((finalNumber < product?.minSale) || (finalNumber > product?.maxSale)) {
    //   this.showToastr.showInfo(
    //     `Este producto tiene un mínimo de cantidad a vender de ${product?.minSale} y un máximo de ${product?.maxSale}`,
    //     'Atención',
    //     5000,
    //   );
    //   return false;
    // } else {
    //   return true;
    // }
    // return false;
    // if ((finalNumber >= product?.minSale) && (finalNumber <= product?.maxSale)) {
    //   this.increment(product, dataToSend);
    //   return true;
    // }
    // return false;
  }
}
