import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-tropipay-confirm-to-pay',
  templateUrl: './dialog-tropipay-confirm-to-pay.component.html',
  styleUrls: ['./dialog-tropipay-confirm-to-pay.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
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
