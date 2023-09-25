import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-dialog-authorize-confirm-to-pay',
  templateUrl: './dialog-authorize-confirm-to-pay.component.html',
  styleUrls: ['./dialog-authorize-confirm-to-pay.component.scss'],
})
export class DialogAuthorizeConfirmToPayComponent implements AfterViewInit {
  templateInputs!: HTMLElement;
  constructor(
    public dialogRef: MatDialogRef<DialogAuthorizeConfirmToPayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data.form.data.url);
  }

  ngAfterViewInit() {
    this.templateInputs = document.getElementById('inputsHiddenBid');
  }

  close() {
    this.dialogRef.close();
  }
}
