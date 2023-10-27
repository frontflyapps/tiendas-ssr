import { ChangePassComponent } from './change-pass/change-pass.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { CapitalizeFirstDirective } from 'src/app/core/directives/capitalize-first.directive';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { GuachosGeneralAutocompleteModule } from 'guachos-general-autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    MyAccountRoutingModule,
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
    MatCheckboxModule,
    MyAccountComponent,
    ChangePassComponent,
    CapitalizeFirstDirective,
  ],
})
export class MyAccountModule {}
