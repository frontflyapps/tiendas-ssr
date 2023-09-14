import { Injectable } from '@angular/core';
import { Product } from '../../../modals/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscriber } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  observer: Subscriber<{}>;
  // Get product from Localstorage
  products = JSON.parse(this.storageService.getItem('wishlistItem')) || [];

  constructor(
    public snackBar: MatSnackBar,
    private storageService: StorageService,
  ) {}

  // Get  wishlist Products
  public getProducts(): Observable<Product[]> {
    this.products = this.storageService.getItem('wishlistItem') || [];
    const itemsStream = new Observable((observer) => {
      observer.next(this.products);
      observer.complete();
    });
    return <Observable<Product[]>>itemsStream;
  }

  // If item is aleready added In wishlist
  public hasProduct(product: Product): boolean {
    const item = this.products.find((item) => item.id === product.id);
    return item !== undefined;
  }

  // Add to wishlist
  public addToWishlist(product: Product): Product | boolean {
    let message, status;
    let item: Product | boolean = false;
    if (this.hasProduct(product)) {
      item = this.products.filter((item) => item.id === product.id)[0];
      const index = this.products.indexOf(item);
    } else {
      this.products.push(product);
    }
    message = 'El producto ' + product.name + ' ha sido añadido a la lista de deseos.';
    status = 'éxito';
    this.snackBar.open(message, '×', {
      panelClass: [status],
      verticalPosition: 'top',
      duration: 3000,
    });
    this.storageService.setItem('wishlistItem', JSON.stringify(this.products));
    return item;
  }

  // Removed Product
  public removeFromWishlist(product: Product) {
    if (product === undefined) {
      return;
    }
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.storageService.setItem('wishlistItem', JSON.stringify(this.products));
  }

  public getWishlistCount() {
    const data: any[] = JSON.parse(this.storageService.getItem('wishlistItem')) || [];
    return data.length;
  }
}
