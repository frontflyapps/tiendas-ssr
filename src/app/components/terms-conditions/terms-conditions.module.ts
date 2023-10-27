import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TermsConditionsComponent } from './terms-conditions.component';

import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

const routes: Routes = [{ path: '', component: TermsConditionsComponent }];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule,
    RouterModule.forChild(routes),
    PipesModule,
    TermsConditionsComponent,
  ],
})
export class TermsConditionsModule {}
