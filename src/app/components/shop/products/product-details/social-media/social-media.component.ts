import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatDividerModule, ShareButtonModule],
})
export class SocialMediaComponent implements OnInit {
  product: any;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<SocialMediaComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  ) {
    this.product = data.product;
  }

  ngOnInit(): void {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
