import { NgModule } from '@angular/core';

import { ShopRoutingModule } from './shop-routing.module';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MainHomeComponent } from './main-home/main-home.component';

@NgModule({
  declarations: [MainHomeComponent],
  imports: [
    ShopRoutingModule,
    NgIf,
    NgFor,
    InfiniteScrollModule,
    PipesModule,
    TranslateModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatSnackBarModule,
  ],
})
export class ShopModule {}
