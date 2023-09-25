import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { BannersFourComponent } from './banners-four/banners-four.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { PipesModule } from '../../core/pipes/pipes.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { PriceComponent } from './products/price/price.component';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductDialogComponent } from './products/product-dialog/product-dialog.component';
import { ProductLeftSidebarComponent } from './products/product-left-sidebar/product-left-sidebar.component';
import { ProductVerticalComponent } from './products/product-vertical/product-vertical.component';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorI18nService } from '../../core/classes/PaginatorI18n.class';
// Import the library
import { ProductCarouselTwoComponent } from './product-carousel-two/product-carousel-two.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { BrandsComponent } from './widgets/brands/brands.component';
import { CategoriesComponent } from './widgets/categories/categories.component';
import { PopularProductsComponent } from './widgets/popular-products/popular-products.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { ProductZoomComponent } from './products/product-details/product-zoom/product-zoom.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';

import { SkeletonLoadingCardsModule } from '../shared/skeleton-loading-cards/skeleton-loading-cards.module';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import {
  MatLegacyPaginatorIntl as MatPaginatorIntl,
  MatLegacyPaginatorModule as MatPaginatorModule,
} from '@angular/material/legacy-paginator';
import { GuachosRatingModule } from 'guachos-rating';
import { BannerPromotionComponent } from './banner-promotion/banner-promotion.component';
import { BannerPromotion2Component } from './banner-promotion2/banner-promotion2.component';
import { DialogFiltersMComponent } from './products/dialog-filters-m/dialog-filters-m.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { CategoriesMComponent } from './widgets/categories-m/categories-m.component';
import { BrandsMComponent } from './widgets/brands-m/brands-m.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { SocialMediaComponent } from './products/product-details/social-media/social-media.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FooterProductCardModule } from '../shared/footer-product-card/footer-product-card.module';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { ConfirmationDialogFrontModule } from '../shared/confirmation-dialog-front/confirmation-dialog-front.module';
import { ShareModule } from 'ngx-sharebuttons';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Meta } from '@angular/platform-browser';
import { GuachosSimplePaginationModule } from 'guachos-simple-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LazyImgModule } from '../../core/directives/lazy-img/lazy-img.module';
import { DialogPrescriptionComponent } from './products/dialog-prescription/dialog-prescription.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';

@NgModule({
  declarations: [
    MainCarouselComponent,
    PriceComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductDialogComponent,
    ProductLeftSidebarComponent,
    ProductVerticalComponent,
    ProductCarouselComponent,
    ProductCarouselTwoComponent,
    BrandsComponent,
    CategoriesComponent,
    PopularProductsComponent,
    MainHomeComponent,
    ProductZoomComponent,
    BannerPromotionComponent,
    BannerPromotion2Component,
    DialogFiltersMComponent,
    CategoriesMComponent,
    BrandsMComponent,
    BlogSectionComponent,
    BannersFourComponent,
    SocialMediaComponent,
    ProductGridComponent,
    ProductListComponent,
    DialogPrescriptionComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    TranslateModule,
    SkeletonLoadingCardsModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    PipesModule,
    GuachosRatingModule,
    PipesModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMenuModule,
    MatSelectModule,
    ShareButtonModule,
    ShareIconsModule,
    MatBottomSheetModule,
    NgxMaterialTimepickerModule,
    NgxImageZoomModule,
    ConfirmationDialogFrontModule,
    FooterProductCardModule,
    MatAutocompleteModule,
    GuachosSimplePaginationModule,
    InfiniteScrollModule,
    LazyImgModule,
    MatToolbarModule,
    MatStepperModule,
    MatRadioModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorI18nService,
    },
    Meta,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShopModule {}
