import { ChangePassComponent } from './change-pass/change-pass.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { UploadFileModule } from '../shared/upload-file/upload-file.module';
import { CapitalizeFirstDirective } from 'src/app/core/directives/capitalize-first.directive';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { GuachosGeneralAutocompleteModule } from 'guachos-general-autocomplete';

@NgModule({
  declarations: [MyAccountComponent, ChangePassComponent, CapitalizeFirstDirective],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    UploadFileModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule,
    MatIconModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    GuachosGeneralAutocompleteModule,
  ],
})
export class MyAccountModule {}
