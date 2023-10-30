import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PayService } from '../../../core/services/pay/pay.service';
import { environment } from 'environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-paypal-redirect-payment',
  templateUrl: './paypal-redirect-payment.component.html',
  styleUrls: ['./paypal-redirect-payment.component.scss'],
  standalone: true,
  imports: [NgIf, MatProgressSpinnerModule],
})
export class PaypalRedirectPaymentComponent {
  params: any;
  loading = true;
  urlToRedirect = environment.url + 'my-orders';

  constructor(
    public translateService: TranslateService,
    private router: Router,
    public route: ActivatedRoute,
    private payService: PayService,
  ) {
    this.loading = true;
    this.route.queryParams.subscribe((data) => {
      this.params = data;

      if (
        this.params.bankOrderCode &&
        this.params.order &&
        this.params.reference &&
        this.params.state
      ) {
        // this.payService.confirmPaymentTropipay(this.params).subscribe(item => {
        //   this.router.navigate(['/my-orders']);
        //   this.loading = false;
        // });
      } else {
        this.payService.confirmPaymentPaypal(this.params).subscribe(() => {
          this.router.navigate(['/my-orders']);
          this.loading = false;
        });
      }
    });
  }
}
