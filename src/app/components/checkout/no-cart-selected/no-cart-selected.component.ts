import { NgxSpinnerService } from 'ngx-spinner';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-no-cart-selected',
  templateUrl: './no-cart-selected.component.html',
  styleUrls: ['./no-cart-selected.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, RouterLink, TranslateModule],
})
export class DialogNoCartSelectedComponent implements OnInit {
  loggedInUser: any;
  launchTM: any;
  link: any = undefined;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogNoCartSelectedComponent>,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
