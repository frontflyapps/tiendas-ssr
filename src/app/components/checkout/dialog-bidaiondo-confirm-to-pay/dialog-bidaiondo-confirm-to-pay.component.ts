import { AfterViewInit, Component, Inject } from '@angular/core';
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-dialog-bidaiondo-confirm-to-pay',
  templateUrl: './dialog-bidaiondo-confirm-to-pay.component.html',
  styleUrls: ['./dialog-bidaiondo-confirm-to-pay.component.scss'],
})
export class DialogBidaiondoConfirmToPayComponent implements AfterViewInit {
  templateInputs;

  constructor(
    public dialogRef: MatDialogRef<DialogBidaiondoConfirmToPayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngAfterViewInit() {
    this.templateInputs = document.getElementById('inputsHiddenBid');
    this.templateInputs.innerHTML = this.data.form;
  }

  close() {
    this.dialogRef.close();
  }
}
