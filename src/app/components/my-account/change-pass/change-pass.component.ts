import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ShowToastrService } from '../../../core/services/show-toastr/show-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { LoggedInUserService } from '../../../core/services/loggedInUser/logged-in-user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgClass } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatIconModule,
    NgClass,
    MatButtonModule,
    TranslateModule,
  ],
})
export class ChangePassComponent implements OnInit {
  innerWidth: any;
  passType = 'password';
  passType2 = 'password';
  applyStyle = false;
  configuration: any = {};
  message: string;
  inLoading = false;
  form: UntypedFormGroup;
  fromPass: UntypedFormGroup;
  language = null;

  constructor(
    public authService: AuthenticationService,
    private showToastr: ShowToastrService,
    private fb: UntypedFormBuilder,
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
    private utilsService: UtilsService,
    private router: Router,
    private route: ActivatedRoute,
    private loggedInUserService: LoggedInUserService,
  ) {
    this.createForm();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 600) {
      this.applyStyle = false;
    } else {
      this.applyStyle = true;
    }
  }

  ngOnInit() {
    // ------------------------------------------------
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
    // -------------------------------------------------
  }

  createForm() {
    this.fromPass = this.fb.group(
      {
        password: [null, [Validators.required, Validators.minLength(6)]],
        repeat: [null, [Validators.required, Validators.minLength(6)]],
      },
      { validator: this.matchValidator.bind(this) },
    );

    this.form = this.fb.group({
      currentPassword: [null, [Validators.required]],
      passwords: this.fromPass,
    });
  }

  onSubmit() {
    this.inLoading = true;
    this.spinner.show();
    const data = { ...this.form.value };
    data.password = data.passwords.password + '';
    data.repeatPassword = data.passwords.repeat + '';
    delete data.passwords;
    this.authService.changePasswordUserLoged(data).subscribe(
      () => {
        this.inLoading = false;
        this.spinner.hide();
        this.showToastr.showSucces(this.translate.instant('Password changed correctly'), 'OK');
        this.router.navigate(['']);
      },
      () => {
        this.inLoading = false;
        this.spinner.hide();
      },
    );
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
}
