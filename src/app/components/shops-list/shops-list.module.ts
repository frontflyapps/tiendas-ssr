import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsListComponent } from './shops-list-component/shops-list.component';
import { ShopsListRoutingModule } from './shops-list-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShopsListComponent],
  imports: [
    CommonModule,
    ShopsListRoutingModule,
    FlexLayoutModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
})
export class ShopsListModule {}
