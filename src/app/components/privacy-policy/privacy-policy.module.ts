import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';

import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forChild(routes),
    PipesModule,
    PrivacyPolicyComponent,
  ],
})
export class PrivacyPolicyModule {}
