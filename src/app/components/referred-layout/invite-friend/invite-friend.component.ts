import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ShowToastrService } from 'src/app/core/services/show-toastr/show-toastr.service';
import { ShareComponent } from '../share/share.component';
import { SocialShareData } from '../share/share-data';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.scss'],
  standalone: true,
  imports: [MatButtonModule, ClipboardModule, TranslateModule],
})
export class InviteFriendComponent {
  @Input() userLinkReferred: string = null;
  @Output() eventClose = new EventEmitter<any>();

  constructor(
    private showToastr: ShowToastrService,
    private translateService: TranslateService,
    private _bottomSheet: MatBottomSheet,
  ) {}

  copyLink() {
    this.userLinkReferred
      ? this.showToastr.showSucces(this.translateService.instant('Enlace copiado al portapapeles'))
      : this.showToastr.showError(this.translateService.instant('No existe enlace'));
  }

  windowOpen() {
    const data = new MatBottomSheetConfig();
    data.panelClass = 'panelClass';
    data.data = <SocialShareData>{
      title: this.translateService.instant('He compartido mi enlace contigo'),
      description: this.userLinkReferred,
    };

    this._bottomSheet.open(ShareComponent, data);
  }
}
