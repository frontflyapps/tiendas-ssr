import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerProtectionComponent } from './consumer-protection.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

const routes: Routes = [{ path: '', component: ConsumerProtectionComponent }];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule,
    RouterModule.forChild(routes),
    PipesModule,
    ConsumerProtectionComponent,
  ],
})
export class ConsumerProtectionModule {}
