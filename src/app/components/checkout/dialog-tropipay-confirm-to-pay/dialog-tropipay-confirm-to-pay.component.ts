import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-dialog-tropipay-confirm-to-pay',
  templateUrl: './dialog-tropipay-confirm-to-pay.component.html',
  styleUrls: ['./dialog-tropipay-confirm-to-pay.component.scss'],
})
export class DialogTropipayConfirmToPayComponent implements AfterViewInit {
  templateInputs!: HTMLElement;

  constructor(
    public dialogRef: MatDialogRef<DialogTropipayConfirmToPayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngAfterViewInit(): void {
    this.templateInputs = document.getElementById('inputsHiddenBid')!;
  }

  close(): void {
    this.dialogRef.close();
  }
}
