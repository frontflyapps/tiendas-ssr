import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BecomeASellerRoutingModule } from './become-a-seller-routing.module';
import { BecomeASellerComponent } from './become-a-seller/become-a-seller.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { GuachosImagePickerModule } from 'guachos-image-picker';
import { BankService } from '../../core/services/bank/bank.service';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { GuachosImageModule } from '../shared/guachos-image/guachos-image.module';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';

// import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [BecomeASellerComponent],
  imports: [
    CommonModule,
    BecomeASellerRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    FlexLayoutModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    GuachosImagePickerModule,
    GuachosImageModule,
    MatCheckboxModule,
  ],
  providers: [BankService],
})
export class BecomeASellerModule {}
