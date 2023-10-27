import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import {
  FormBuilder,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CaptchaService } from '../../../core/services/captcha/captcha.service';
import { ShowToastrService } from '../../../core/services/show-toastr/show-toastr.service';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LocalStorageService } from '../../../core/services/localStorage/localStorage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { I18nFieldPipe } from '../../../core/pipes/i18n-field.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog-captcha',
  templateUrl: './dialog-captcha.component.html',
  styleUrls: ['./dialog-captcha.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    TranslateModule,
    I18nFieldPipe,
  ],
})
export class DialogCaptchaComponent implements OnInit {
  form: UntypedFormGroup;
  data: any;
  pathToRedirect: any;
  inLoading = false;

  constructor(
    private fb: UntypedFormBuilder,
    public captchaService: CaptchaService,
    public showToastr: ShowToastrService,
    public utilsService: UtilsService,
    public translateService: TranslateService,
    public localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    public spinner: NgxSpinnerService,
    private router: Router,
    private cartService: CartService,
  ) {
    // this.data = this.localStorageService.getFromStorage('captcha');
    console.log(this.data);
    this.pathToRedirect = this.route.snapshot.queryParams.url;
    console.log(this.pathToRedirect);
    this.refreshData();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      value: [null, [Validators.required]],
      hash: [this.data ? this.data?.hash : null, [Validators.required]],
    });
  }

  refreshData() {
    console.log(this.data);
    const dataToSend = {
      uuid: this.data?.uuid,
      hash: this.data?.hash,
    };
    this.inLoading = true;
    this.captchaService.getCaptcha(dataToSend).subscribe(
      (item) => {
        this.inLoading = false;
        this.data = item;
        console.log(item);
        // this.localStorageService.setOnStorage('captcha', item);
        // this.data = this.localStorageService.getFromStorage('captcha');
      },
      (error) => {
        this.inLoading = false;
        console.log(error);
        this.utilsService.errorHandle(error);
      },
    );
  }

  sendData() {
    const dataToSend = {
      uuid: this.data?.uuid,
      hash: this.data?.hash,
      answer: this.form.get('value').value,
    };
    this.inLoading = true;

    this.captchaService.confirmCaptcha(dataToSend).subscribe(
      (item) => {
        this.showToastr.showSucces('Captcha correcto');
        this.inLoading = true;
        if (this.cartService.dataAddToCart) {
          this.cartService
            .addToCart(
              this.cartService.dataAddToCart.product,
              this.cartService.dataAddToCart.quantity,
              this.cartService.dataAddToCart.goToPay,
              this.cartService.dataAddToCart.supplementIds,
              this.cartService.dataAddToCart.prescription,
            )
            .then((item) => {
              this.router.navigate(['cart']);
              this.inLoading = false;
              this.cartService.dataAddToCart = null;
            });
        } else if (this.pathToRedirect.includes(['payment'])) {
          console.log('entro aki');
          console.log(this.pathToRedirect);
          this.router.navigate([this.pathToRedirect]);
        } else {
          this.inLoading = false;
          this.router.navigate(['']);
        }
        this.inLoading = false;
      },
      (error) => {
        console.log(error);
        this.inLoading = false;
        this.data = error.error;
        // this.localStorageService.setOnStorage('captcha', error.error);
        // this.data = this.localStorageService.getFromStorage('captcha');
        this.showToastr.showError(error.error.title);
        // this.utilsService.errorHandle(error);
      },
    );
    console.log('sendData');
  }
}
