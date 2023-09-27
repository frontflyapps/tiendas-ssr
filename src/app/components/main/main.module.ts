import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SidebarMenuService } from './sidebar/sidebar-menu.service';
import { ShoppingWidgetsComponent } from './shopping-widgets/shopping-widgets.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MenuComponent } from './menu/menu.component';
import { FooterTwoModule } from '../shared/footer-two/footer-two.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmPaymentOkComponent } from './confirm-payment-ok/confirm-payment-ok.component';
import { MatBadgeModule } from '@angular/material/badge';
import { NotificationItemComponent } from './notification/notification-item/notification-item.component';
import { PanelNotificationsComponent } from './notification/panel-notifications/panel-notifications.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ShopModule } from '../shop/shop.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PreviousRouteService } from '../../core/services/previous-route/previous-route.service';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { FooterModule } from '../shared/footer/footer.module';
import { ConfirmCreateBusinessComponent } from './confirm-create-business/confirm-create-business.component';
import { ConfirmCreateBusinessService } from './confirm-create-business/confirm-create-business.service';
import { DialogSetLocationComponent } from './dialog-set-location/dialog-set-location.component';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { GuachosImagePickerModule } from 'guachos-image-picker';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { GuachosGeneralAutocompleteModule } from 'guachos-general-autocomplete';
import { GuachosImageModule } from '../shared/guachos-image/guachos-image.module';

@NgModule({
  declarations: [
    MainComponent,
    PanelNotificationsComponent,
    NotificationItemComponent,
    ConfirmPaymentOkComponent,
    DialogSetLocationComponent,
    ConfirmCreateBusinessComponent,
    MenuComponent,
    EditProfileComponent,
    MyContactsComponent,
    SidebarComponent,
    ShoppingWidgetsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ShopModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    FooterTwoModule,
    MatFormFieldModule,
    PipesModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    FooterModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    GuachosImagePickerModule,
    GuachosGeneralAutocompleteModule,
    GuachosImageModule,
  ],
  providers: [SidebarMenuService, PreviousRouteService, ConfirmCreateBusinessService],
})
export class MainModule {}
