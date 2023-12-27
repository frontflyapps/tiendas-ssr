import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PhoneCodeService } from '../../../core/services/phone-code/phone-codes.service';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GuajiritosGeneralAutocomplete } from '@guajiritos/general-autocomplete';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-dialog-phone',
  templateUrl: './dialog-phone.component.html',
  styleUrls: ['./dialog-phone.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PhoneCodeService],
  standalone: true,
  imports: [
    NgIf,
    GuajiritosGeneralAutocomplete,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    UpperCasePipe,
    TranslateModule,
  ],
})
export class DialogPhoneComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogPhoneComponent>,
    private fb: UntypedFormBuilder,
    public phoneCodesService: PhoneCodeService,
    public utilsService: UtilsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  public form: UntypedFormGroup;
  callingCodeDisplayOptions = {
    firthLabel: [
      {
        type: 'path',
        path: ['code'],
      },
    ],
  };

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      phone: [this.data?.phone ?? null, [Validators.required]],
      PhoneCallingCodeId: [this.data?.PhoneCallingCodeId ?? null, [Validators.required]],
    });
  }

  public validate() {
    return this.form.invalid;
  }

  public onSave() {}
}
