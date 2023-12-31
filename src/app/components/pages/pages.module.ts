import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogModule } from '../blog/blog.module';

import { TranslateModule } from '@ngx-translate/core';
// ------- Material Imports----------///
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { GuajiritosRating } from '@guajiritos/rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    BlogModule,
    TranslateModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
    MatAutocompleteModule,
    GuajiritosRating,
    MatDialogModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    WishlistComponent,
    CompareComponent,
  ],
})
export class PagesModule {}
