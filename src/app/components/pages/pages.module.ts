import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogModule } from '../blog/blog.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
// ------- Material Imports----------///
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { GuachosRatingModule } from 'guachos-rating';
import { ConfirmationDialogFrontModule } from '../shared/confirmation-dialog-front/confirmation-dialog-front.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    BlogModule,
    FlexLayoutModule,
    TranslateModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
    MatAutocompleteModule,
    GuachosRatingModule,
    MatDialogModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    ConfirmationDialogFrontModule,
    MatDialogModule,
  ],
  declarations: [WishlistComponent, CompareComponent],
})
export class PagesModule {}
