import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypalRedirectPaymentRoutingModule } from './paypal-redirect-payment-routing.module';
import { PaypalRedirectPaymentComponent } from './paypal-redirect-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    PaypalRedirectPaymentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    PaypalRedirectPaymentComponent,
  ],
})
export class PaypalRedirectPaymentModule {}
