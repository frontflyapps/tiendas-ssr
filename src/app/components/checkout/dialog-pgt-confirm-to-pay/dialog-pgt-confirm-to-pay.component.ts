import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-pgt-confirm-to-pay',
  templateUrl: './dialog-pgt-confirm-to-pay.component.html',
  styleUrls: ['./dialog-pgt-confirm-to-pay.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
})
export class DialogPgtConfirmToPayComponent implements AfterViewInit {
  templateInputs!: HTMLElement;

  constructor(
    public dialogRef: MatDialogRef<DialogPgtConfirmToPayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngAfterViewInit(): void {
    //eslint-disable-next-line
    this.templateInputs = document.getElementById('inputsHiddenBid')!;
    this.templateInputs.innerHTML = this.data.form;
  }

  close(): void {
    this.dialogRef.close();
  }
}
