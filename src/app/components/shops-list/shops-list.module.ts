import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsListComponent } from './shops-list-component/shops-list.component';
import { ShopsListRoutingModule } from './shops-list-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShopsListRoutingModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    ShopsListComponent,
  ],
})
export class ShopsListModule {}
