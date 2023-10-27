import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-bidaiondo-confirm-to-pay',
  templateUrl: './dialog-bidaiondo-confirm-to-pay.component.html',
  styleUrls: ['./dialog-bidaiondo-confirm-to-pay.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
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
