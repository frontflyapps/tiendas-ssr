import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SocialShareData } from './share-data';
import { TranslateModule } from '@ngx-translate/core';
import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { NgIf } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  standalone: true,
  imports: [MatDividerModule, NgIf, ShareButtonModule, TranslateModule],
})
export class ShareComponent implements OnInit {
  @Input() whatsapp = true;
  @Input() facebook = true;
  @Input() telegram = true;
  @Input() email = true;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ShareComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: SocialShareData,
  ) {}

  ngOnInit(): void {
    //TODO Pendiente Verificar que todas las variables no sean False
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
