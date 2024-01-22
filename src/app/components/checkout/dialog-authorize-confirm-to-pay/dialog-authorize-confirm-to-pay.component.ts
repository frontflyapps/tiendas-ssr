import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-authorize-confirm-to-pay',
  templateUrl: './dialog-authorize-confirm-to-pay.component.html',
  styleUrls: ['./dialog-authorize-confirm-to-pay.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
})
export class DialogAuthorizeConfirmToPayComponent implements AfterViewInit {
  templateInputs!: HTMLElement;
  constructor(
    public dialogRef: MatDialogRef<DialogAuthorizeConfirmToPayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngAfterViewInit() {
    this.templateInputs = document.getElementById('inputsHiddenBid');
  }

  close() {
    this.dialogRef.close();
  }
}
