import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { LoggedInUserService } from 'src/app/core/services/loggedInUser/logged-in-user.service';
import { CurrencyMarket } from '../../../core/pipes/currency-market.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-details-shipping',
  templateUrl: './details-shipping.component.html',
  styleUrls: ['./details-shipping.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    NgIf,
    TranslateModule,
    CurrencyMarket,
  ],
})
export class DetailsShippingComponent implements OnInit, OnDestroy {
  _unsubscribeAll: Subject<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['product', 'price'];
  shippingItems: any[] = [];
  language: 'es';
  marketCard: '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public utilsService: UtilsService,
    public dialogRef: MatDialogRef<DetailsShippingComponent>,
    private loggedInUserService: LoggedInUserService,
  ) {
    this.dialogRef.disableClose = true;
    this._unsubscribeAll = new Subject<any>();
    this.shippingItems = data?.element[0]?.shippingItems;
    this.marketCard = data?.market;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.shippingItems);
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

  getTotalCost() {
    return this.shippingItems
      .map((shipping) => shipping.price)
      .reduce((acc, value) => acc + value, 0);
  }
}
