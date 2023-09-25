import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';

// ----------------------------------------------

////////// --------MATERIAL MODULES------- /////////////////////////
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MyOrdersRoutingModule } from './my-orders-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { GuachosRatingModule } from 'guachos-rating';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { DialogBidaiondoCancelToPayComponent } from './dialog-bidaiondo-cancel-to-pay/dialog-bidaiondo-cancel-to-pay.component';
import { EditOrderComponent } from './edit-order/edit-order.component';

///////////////////////////////////////////////////////////////////

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyOrdersRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatSidenavModule,
    MatRippleModule,
    MatTabsModule,
    MatSelectModule,
    TranslateModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    GuachosRatingModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  declarations: [
    MyOrdersComponent,
    CancelOrderComponent,
    DialogBidaiondoCancelToPayComponent,
    EditOrderComponent,
  ],
  providers: [],
})
export class MyOrdersModule {}
