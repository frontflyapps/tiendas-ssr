import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { LoggedInUserService } from '../../../core/services/loggedInUser/logged-in-user.service';
import { ShowSnackbarService } from '../../../core/services/show-snackbar/show-snackbar.service';
import { ShowToastrService } from '../../../core/services/show-toastr/show-toastr.service';
import { UtilsService } from '../../../core/services/utils/utils.service';
import {
  CUBAN_PHONE_START_5,
  EMAIL_REGEX,
  PASS_CLIENT_REGEX,
} from '../../../core/classes/regex.const';
import { PhoneCodeService } from '../../../core/services/phone-code/phone-codes.service';
import { CartService } from '../../shared/services/cart.service';
import { Cart } from '../../../modals/cart-item';
import { environment } from 'environments/environment';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { BusinessConfigService } from 'src/app/core/services/business-config/business-config.service';
import { UploadFileComponent } from '../../shared/upload-file/upload-file.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GuajiritosGeneralAutocomplete } from '@guajiritos/general-autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PhoneCodeService],
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    NgFor,
    GuajiritosGeneralAutocomplete,
    NgClass,
    MatCheckboxModule,
    TranslateModule,
    UploadFileComponent,
  ],
})
export class MyAccountComponent implements OnInit {
  innerWidth: any;
  passType = 'password';
  passType2 = 'password';
  applyStyle = false;
  public logo = environment.logoWhite;
  configuration: any = {};
  message: string;
  redirectToOriginPage: string;
  paramsToRedirect: any;
  urlToRedirect: any;
  dataToCart: any;
  inLoading = false;
  loginForm: UntypedFormGroup;
  formPass: UntypedFormGroup;
  fromPassRegister: UntypedFormGroup;
  pinForm: UntypedFormGroup;
  activateForm: UntypedFormGroup;
  registrationForm: UntypedFormGroup;
  signUpTypesForm: UntypedFormGroup;
  regTcpForm: UntypedFormGroup;
  insertEmailPassForm: UntypedFormGroup;
  changeToNewPassForm: UntypedFormGroup;

  callingCodeDisplayOptions = {
    firthLabel: [
      {
        type: 'path',
        path: ['code'],
      },
    ],
  };

  pdfData: any[] = [];
  selectedDocument = false;

  showLoginForm = true;
  showRegistrationForm = false;
  showPinForm = false;
  showActivateForm = false;
  showResetPassForm = false;
  showNewPassForm = false;
  queryParams = null;
  language = null;
  isRegisterToPay = false;
  isRegisterToBecomeASeller = false;
  routeToNavigate = '/checkout';
  localDatabaseUsers = environment.localDatabaseUsers;
  signUpTypes = [
    {
      viewValue: 'Normal',
      value: 'normal',
    },
    {
      viewValue: 'TCP',
      value: 'tcp',
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.applyStyle = this.innerWidth <= 600;
  }

  constructor(
    public authService: AuthenticationService,
    private toastr: ShowToastrService,
    private fb: UntypedFormBuilder,
    public translate: TranslateService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
    private showSnackbar: ShowSnackbarService,
    private showToastr: ShowToastrService,
    private loggedInUserService: LoggedInUserService,
    public phoneCodesService: PhoneCodeService,
    public utilsService: UtilsService,
    private storageService: StorageService,
    public appService: BusinessConfigService,
    private cartService: CartService,
  ) {
    this.message = '';
    this.isRegisterToPay = !!this.storageService.getItem('isRegisterToPay');
    this.isRegisterToBecomeASeller = !!this.storageService.getItem('isRegisterToBecomeASeller');
    this.storageService.removeItem('isRegisterToPay');
    this.storageService.removeItem('isRegisterToBecomeASeller');
    this.routeToNavigate = this.isRegisterToPay
      ? '/cart'
      : this.isRegisterToBecomeASeller
      ? '/become-a-seller'
      : '';

    this.createForm();
    this.createRegistrationForm();
    this.createValidationForm();
    this.createChangePassForm();
    this.createNewPassForm();
    this.createActivateForm();

    if (this.appService.businessConfig?.signUpType === 'multiple') {
      this.signUpTypesForm.get('signUpType').valueChanges.subscribe((item) => {
        if (item === 'normal') {
          this.regTcpForm.disable();
          this.registrationForm.enable();
        } else if (item === 'tcp') {
          this.registrationForm.disable();
          this.regTcpForm.enable();
        }
      });
    }

    this.getParamsAndInspect();
  }

  /**
   * ====================================================
   * Check Params and redirect to view on my-account
   */
  getParamsAndInspect() {
    const params = this.route.queryParams;
    this.paramsVerifyPositionModal(params);
    this.route.queryParams.subscribe((data) => {
      this.paramsVerifyPositionModal(data);
      this.redirectToOriginPage = data.redirectToOriginPage;
      this.paramsToRedirect = data.paramsToRedirect;
      this.urlToRedirect = data.urlToRedirect;
      if (JSON.parse(data.addToCart)) {
        this.dataToCart = this.cartService.getDataToAddToCart();
      }
      // this.dataToCart = {
      //   goToPay: JSON.parse(data.goToPay),
      //   addToCart: JSON.parse(data.addToCart),
      //   product: data.product,
      //   counter: JSON.parse(data.counter),
      // };
    });
  }

  paramsVerifyPositionModal(data) {
    const viewPositionOfModal = {
      registration: () => this.onShowRegistration(),
      password: () => this.onChangePass(),
      validate: () => this.onShowActivate(),
    };

    if (data?.modal) {
      try {
        viewPositionOfModal[data?.modal]();
      } catch (e) {
        this.router.navigate(['/my-account']).then(() => {
          console.warn('Modal with Error, data.modal:', data?.modal);
        });
      }
    }
  }

  /**
   * Check Params and redirect to view on my-account
   * ====================================================
   */

  showPass() {
    if (this.passType === 'password') {
      this.passType = 'text';
    } else {
      this.passType = 'password';
    }
  }

  showPass2() {
    if (this.passType2 === 'password') {
      this.passType2 = 'text';
    } else {
      this.passType2 = 'password';
    }
  }

  ngOnInit() {
    this.queryParams = this.route.snapshot.queryParams;
    this.checkQueryParams();
    // ------------------------------------------------
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
    // -------------------------------------------------
  }

  checkQueryParams() {
    if (this.queryParams.validate && this.queryParams.pin && this.queryParams.email) {
      this.pinForm.controls['pin'].setValue(this.queryParams.pin);
      this.registrationForm.controls['email'].setValue(this.queryParams.email);
      if (this.pinForm.valid && this.registrationForm.controls['email'].valid) {
        this.onSetValidationPin();
        this.spinner.show();
        setTimeout(() => {
          this.onCheckPin();
        });
      } else {
        this.showToastr.showError(
          this.translate.instant(
            'The email or pin are invalid the validation accont is going to fail',
          ),
          undefined,
          8000,
        );
      }
    } else if (
      this.queryParams.modal == 'password' &&
      this.queryParams.pin &&
      this.queryParams.email
    ) {
      this.showRegistrationForm = false;
      this.showPinForm = false;
      this.showResetPassForm = false;
      this.showLoginForm = false;
      this.showNewPassForm = true;
      this.inLoading = false;
      this.changeToNewPassForm.controls['pin'].setValue(this.queryParams.pin);
      this.insertEmailPassForm.value.email = this.queryParams.email;
    }
    if (this.queryParams.ref) {
      this.registrationForm.controls['code'].setValue(this.queryParams.ref);
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.pattern(/^\w((?!\s{2}).)*/)]],
      password: [null, [Validators.required]],
    });
  }

  createRegistrationForm() {
    this.fromPassRegister = this.fb.group(
      {
        password: [null, [Validators.required, Validators.pattern(PASS_CLIENT_REGEX)]],
        repeat: [null, [Validators.required, Validators.pattern(PASS_CLIENT_REGEX)]],
      },
      { validator: this.matchValidator.bind(this) },
    );

    this.initRegistrationForm(this.appService.businessConfig?.signUpType);
    // this.registrationForm.markAllAsTouched();
  }

  initRegistrationForm(signupType: string) {
    if (signupType === 'normal') {
      this.registrationForm = this.fb.group({
        name: [null, [Validators.required, Validators.pattern(/^\w((?!\s{2}).)*/)]],
        lastname: [null, [Validators.required, Validators.pattern(/^\w((?!\s{2}).)*/)]],
        phone: [null, this.appService.businessConfig.phoneRequired ? [Validators.required] : []],
        PhoneCallingCodeId: [
          null,
          this.appService.businessConfig.phoneRequired ? [Validators.required] : [],
        ],
        address: [null, []],
        email: [null, [Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)]],
        passwords: this.fromPassRegister,
        checkAge: [null, [Validators.required]],
        signUpType: ['normal'],
      });
      return;
    } else if (signupType === 'tcp') {
      this.regTcpForm = this.fb.group({
        name: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        lastname: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        ci: [
          null,
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        ciONAT: [
          null,
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        licenceTCP: [
          null,
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        activity: [null, [Validators.required]],
        checkAge: [null, [Validators.required]],
        phoneCel: [
          null,
          [
            Validators.pattern(CUBAN_PHONE_START_5),
            Validators.minLength(8),
            Validators.maxLength(8),
          ],
        ],
        phone: [
          null,
          this.appService.businessConfig.phoneRequired
            ? [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
            : [Validators.minLength(8), Validators.maxLength(8)],
        ],
        address: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)]],
        passwords: this.fromPassRegister,
        PhoneCallingCodeId: [null, []],
        bankAccountCard26: [
          null,
          [
            Validators.required,
            Validators.minLength(16),
            Validators.maxLength(16),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        bankNameCard26: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        bankOfficeCard26: [
          null,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        signUpType: ['tcp'],
      });
    } else if (signupType === 'multiple') {
      this.signUpTypesForm = this.fb.group({
        signUpType: ['normal'],
      });
      this.registrationForm = this.fb.group({
        name: [null, [Validators.required, Validators.pattern(/^\w((?!\s{2}).)*/)]],
        lastname: [null, [Validators.required, Validators.pattern(/^\w((?!\s{2}).)*/)]],
        PhoneCallingCodeId: [
          null,
          this.appService.businessConfig.phoneRequired ? [Validators.required] : [],
        ],
        phone: [null, this.appService.businessConfig.phoneRequired ? [Validators.required] : []],
        address: [null, []],
        checkAge: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)]],
        passwords: this.fromPassRegister,
        signUpType: ['normal'],
      });
      this.regTcpForm = this.fb.group({
        name: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        lastname: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        ci: [
          null,
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        ciONAT: [
          null,
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        licenceTCP: [
          null,
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        activity: [null, [Validators.required]],
        checkAge: [null, [Validators.required]],
        phoneCel: [
          null,
          [
            Validators.pattern(CUBAN_PHONE_START_5),
            Validators.minLength(8),
            Validators.maxLength(8),
          ],
        ],
        phone: [
          null,
          this.appService.businessConfig.phoneRequired
            ? [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
            : [Validators.minLength(8), Validators.maxLength(8)],
        ],
        PhoneCallingCodeId: [null, []],
        address: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)]],
        passwords: this.fromPassRegister,
        bankAccountCard26: [
          null,
          [
            Validators.required,
            Validators.minLength(16),
            Validators.maxLength(16),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        bankNameCard26: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        bankOfficeCard26: [
          null,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        signUpType: ['tcp'],
      });
    } else {
      this.registrationForm = this.fb.group({
        name: [null, [Validators.required, Validators.pattern(/^\w((?!\s{2}).)*/)]],
        lastname: [null, [Validators.required, Validators.pattern(/^\w((?!\s{2}).)*/)]],
        phone: [null, this.appService.businessConfig.phoneRequired ? [Validators.required] : []],
        address: [null, []],
        checkAge: [null, [Validators.required]],
        PhoneCallingCodeId: [
          null,
          this.appService.businessConfig.phoneRequired ? [Validators.required] : [],
        ],
        email: [null, [Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)]],
        passwords: this.fromPassRegister,
        signUpType: ['normal'],
      });
    }
  }

  createValidationForm() {
    this.pinForm = this.fb.group({
      pin: [null, [Validators.required]],
    });
  }

  createChangePassForm() {
    this.insertEmailPassForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  createActivateForm() {
    this.route.queryParams.subscribe((data) => {
      this.activateForm = this.fb.group({
        email: [data ? data?.email : null, [Validators.required, Validators.email]],
        pin: [data ? data?.pin : null, [Validators.required]],
      });
    });
  }

  createNewPassForm() {
    this.formPass = this.fb.group(
      {
        password: [null, [Validators.required, Validators.minLength(6)]],
        repeat: [null, [Validators.required, Validators.minLength(6)]],
      },
      { validator: this.matchValidator.bind(this) },
    );

    this.changeToNewPassForm = this.fb.group({
      pin: [null, [Validators.required]],
      passwords: this.formPass,
    });
  }

  login(username: string, password: string) {
    this.inLoading = true;
    this.spinner.show();
    this.authService.login(username, password).subscribe(
      (value: any) => {
        const data = value.data;
        if (data) {
          this.loggedInUserService.saveAccountCookie(data.Authorization);
          this.loggedInUserService.updateUserProfile(data.profile);

          this.toastr.showInfo(
            this.translate.instant('You have successfully logged into our system'),
            this.translate.instant('User login'),
            10000,
          );
          this.inLoading = false;
          /** Redirect to origin URL when login **/
          if (this.redirectToOriginPage) {
            /** URL with params **/
            if (this.paramsToRedirect) {
              const tempParams = JSON.parse(this.paramsToRedirect);
              if (this.dataToCart?.addToCart) {
                if (this.dataToCart?.goToPay) {
                  this.cartService
                    .addToCart(this.dataToCart.product, this.dataToCart.counter)
                    .then((carts: Cart[]) => {
                      for (const cart of carts) {
                        const dataFind = cart.CartItems.find(
                          (cartItemx) => cartItemx?.ProductId == this.dataToCart.product.id,
                        );
                        if (dataFind != undefined) {
                          const cartId = cart?.id;
                          const BusinessId = cart.BusinessId;
                          const cartIds = cart?.CartItems
                            ? cart?.CartItems.map((i) => i.id)
                            : cart.CartItems.map((i) => i.id);
                          this.router
                            .navigate(['/checkout'], {
                              queryParams: { cartId, cartIds, BusinessId },
                            })
                            .then();
                          return;
                        }
                      }
                    });
                  // await carts = this.loggedInUserService._getDataFromStorage('cartItem') || [];
                  // const cartId =
                  // this.router.navigate(['/checkout'], { queryParams: { cartId, cartIds, BusinessId } }).then();
                } else {
                  this.cartService
                    .addToCart(this.dataToCart.product, this.dataToCart.counter)
                    .then();
                  this.router
                    .navigate([this.redirectToOriginPage], {
                      queryParams: { ...tempParams.params },
                    })
                    .then();
                }
              } else {
                this.router
                  .navigate([this.redirectToOriginPage], {
                    queryParams: { ...tempParams.params },
                  })
                  .then();
              }
            } else {
              this.router.navigate([this.redirectToOriginPage]).then();
            }
          } else {
            this.router.navigate(['/']).then();
          }
          this.spinner.hide();
        } else {
          this.toastr.showError(this.translate.instant('Wrong user'));
          this.inLoading = false;
        }
      },
      (error) => {
        console.warn(error);
        this.inLoading = false;
        this.spinner.hide();
      },
    );
  }

  errorHandle(error) {
    const msg =
      error.error.errors && error.error.errors.length
        ? error.error.errors.map((item) => item.message)
        : error.error.message
        ? error.error.message
        : 'Error registrando usuario';
    this.toastr.showError(msg, 'Error', 10000);
  }

  falseSuccessHandle(data): boolean {
    const dataString = {
      name: data,
      username: data,
    };
    this.loggedInUserService.setLoggedInUser(dataString);
    this.inLoading = false;
    return true;
  }

  matchValidator(group: UntypedFormGroup) {
    const pass = group.controls['password'].value;
    const repeat = group.controls['repeat'].value;
    if (pass === repeat) {
      return null;
    }
    return {
      mismatch: true,
    };
  }

  onShowRegistration() {
    this.showRegistrationForm = true;
    this.showLoginForm = false;
    this.showPinForm = false;
    this.showResetPassForm = false;
    this.showNewPassForm = false;
    this.showActivateForm = false;
  }

  onShowActivate() {
    this.showRegistrationForm = false;
    this.showLoginForm = false;
    this.showPinForm = false;
    this.showResetPassForm = false;
    this.showNewPassForm = false;
    this.showActivateForm = true;
  }

  onChangePass() {
    this.showLoginForm = false;
    this.showRegistrationForm = false;
    this.showPinForm = false;
    this.showResetPassForm = true;
    this.showNewPassForm = false;
    this.showActivateForm = false;
  }

  onSetValidationPin() {
    this.showPinForm = true;
    this.showRegistrationForm = false;
    this.showLoginForm = false;
    this.showResetPassForm = false;
    this.showActivateForm = false;
  }

  onSignUp() {
    const data = this.registrationForm.value;
    data.password = data.passwords.password;
    data.lastName = data.lastname;
    data.role = 'Client';
    const token = localStorage.getItem('token');
    if (token != undefined) {
      data.token = token;
    }
    this.spinner.show();
    this.inLoading = true;
    this.showPinForm = false;
    this.showLoginForm = false;
    this.showResetPassForm = false;
    this.showRegistrationForm = true;
    //
    this.authService.singUp(data).subscribe({
      next: () => {
        this.toastr.showInfo(
          this.translate.instant(
            `You have successfully registered, verify your email to complete the account validation`,
          ),
          '',
          10000,
        );
        this.inLoading = false;
        this.showPinForm = true;
        this.showRegistrationForm = false;
        this.showLoginForm = false;
        this.showResetPassForm = false;
        this.spinner.hide();
        return true;
      },
      error: (error) => {
        this.spinner.hide();
        this.utilsService.errorHandle(error);
        this.inLoading = false;
      },
    });

    return false;
  }
  onSignUpTCP() {
    const data = this.regTcpForm.value;
    data.password = data.passwords.password;
    data.lastName = data.lastname;
    data.role = 'Client';
    if (this.pdfData.length) data.file = this.pdfData[0].file.data;
    const token = this.storageService.getItem('token');
    if (token != undefined) {
      data.token = token;
    }
    this.spinner.show();
    this.inLoading = true;
    this.showPinForm = false;
    this.showLoginForm = false;
    this.showResetPassForm = false;
    this.showRegistrationForm = true;

    this.authService.singUp(data).subscribe({
      next: () => {
        this.toastr.showInfo(
          this.translate.instant(
            `You have successfully registered, verify your email to complete the account validation`,
          ),
          '',
          10000,
        );
        this.inLoading = false;
        this.showPinForm = true;
        this.showRegistrationForm = false;
        this.showLoginForm = false;
        this.showResetPassForm = false;
        this.router.navigate(['']).then();
        this.spinner.hide();
        return true;
      },
      error: (error) => {
        this.spinner.hide();
        this.utilsService.errorHandle(error);
        this.inLoading = false;
      },
    });

    return false;
  }

  onValidateAccount() {
    const data = this.activateForm.value;
    return this.validatePing(data);
  }

  onCheckPin(email?) {
    const data = this.pinForm.value;
    if (email) {
      data.email = email;
    } else {
      data.email = this.registrationForm.value.email;
    }
    return this.validatePing(data);
  }

  private validatePing(data) {
    this.inLoading = true;
    this.spinner.show();
    this.authService.validatePing(data).subscribe(
      (result) => {
        this.toastr.showSucces('Registrado correctamente', '', 6000);
        this.showRegistrationForm = false;
        this.showPinForm = false;
        this.showResetPassForm = false;
        this.showActivateForm = false;
        this.showLoginForm = true;
        this.spinner.hide();
        this.loggedInUserService.saveAccountCookie(result.data.Authorization);
        this.loggedInUserService.updateUserProfile(result.data.profile);
        this.toastr.showInfo(
          this.translate.instant('You have successfully logged into our system'),
          this.translate.instant('User login'),
          10000,
        );
        this.inLoading = false;
        this.router.navigate([this.routeToNavigate]);
        return true;
      },
      (error) => {
        this.utilsService.errorHandle(error);
        this.inLoading = false;
        this.spinner.hide();
      },
    );

    return false;
  }

  onGoBefore() {
    if (this.showRegistrationForm) {
      this.showLoginForm = true;
      this.showRegistrationForm = false;
      this.showPinForm = false;
      this.showNewPassForm = false;
      this.showResetPassForm = false;
      this.showActivateForm = false;
    } else if (this.showPinForm) {
      this.showLoginForm = false;
      this.showRegistrationForm = true;
      this.showPinForm = false;
      this.showResetPassForm = false;
      this.showNewPassForm = false;
      this.showActivateForm = false;
    } else if (this.showResetPassForm) {
      this.showLoginForm = true;
      this.showRegistrationForm = false;
      this.showPinForm = false;
      this.showResetPassForm = false;
      this.showNewPassForm = false;
      this.showActivateForm = false;
    } else if (this.showNewPassForm) {
      this.showLoginForm = true;
      this.showRegistrationForm = false;
      this.showPinForm = false;
      this.showResetPassForm = false;
      this.showNewPassForm = false;
      this.showActivateForm = false;
    } else if (this.showActivateForm) {
      this.showLoginForm = true;
      this.showRegistrationForm = false;
      this.showPinForm = false;
      this.showResetPassForm = false;
      this.showNewPassForm = false;
      this.showActivateForm = false;
    }
  }

  onSendEmail2ChangePass() {
    this.inLoading = true;
    this.spinner.show();
    this.authService.passForgot(this.insertEmailPassForm.value).subscribe(
      () => {
        this.showRegistrationForm = false;
        this.showPinForm = false;
        this.showResetPassForm = false;
        this.showLoginForm = false;
        this.showNewPassForm = true;
        this.inLoading = false;
        this.spinner.hide();
        this.toastr.showInfo(
          'Solicitud procesada con éxito, verifique el pin enviado al correo',
          'Solicitud procesada',
          5000,
        );
      },
      (error) => {
        this.utilsService.errorHandle(error, 'Pin', 'Verify');
        this.spinner.hide();
        this.inLoading = false;
      },
    );
  }

  onNewPass(pin, password) {
    this.inLoading = true;
    this.spinner.show();
    this.authService
      .changePass({
        pin: pin,
        password: password,
        email: this.insertEmailPassForm.value.email,
      })
      .subscribe(
        () => {
          this.toastr.showSucces('Cambio de contraseña correctamente', 'OK', 8000);
          this.onGoBefore();
          this.inLoading = false;
          this.spinner.hide();
        },
        (error) => {
          this.utilsService.errorHandle(error);
          this.inLoading = false;
          this.spinner.hide();
        },
      );
  }

  //////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  handleReset() {}

  handleExpire() {}

  handleSuccess() {}

  handleLoad() {}

  onSelectPdf($event) {
    this.pdfData = [];
    $event.forEach((doc) => {
      this.pdfData.push({
        ...doc,
        fkId: null,
        fkModel: 'UserId',
      });
    });
    this.validDocumentSelection();
    //
    // this.pdfData[index]   = {
    //   ...$event,
    //   fkId   : null,
    //   fkModel: 'UserId',
    // };
    // this.selectedDocument = true;
  }

  validDocumentSelection() {
    this.selectedDocument = false;
    this.pdfData.forEach((document) => {
      if (document) {
        this.selectedDocument = true;
      }
    });
  }

  savePdf(result) {
    if (this.pdfData) {
      this.pdfData.forEach((document) => {
        if (document) {
          const doc = { ...document };
          doc.fkId = result.data.id;
          // this.uploadFilesService.emitUploadStart(doc);
        }
      });
    }
  }

  onAddDocument() {
    this.pdfData.push(null);
    this.validDocumentSelection();
  }

  onRemoveDocument(index) {
    this.pdfData.splice(index, 1);
    this.validDocumentSelection();
  }

  /////////////////////////////////////////////////////////
}
