import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogColumnComponent } from './blog-column/blog-column.component';
import { SharedModule } from './../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BlogRoutingModule,
    TranslateModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  declarations: [BlogColumnComponent, BlogDetailsComponent],
})
export class BlogModule {}
