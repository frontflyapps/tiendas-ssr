import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { Subject } from 'rxjs';
import { environment } from 'environments/environment';
import { UpperCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-reload-app',
  templateUrl: './dialog-reload-app.component.html',
  styleUrls: ['./dialog-reload-app.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, UpperCasePipe, TranslateModule],
})
export class DialogReloadAppComponent {
  innerWidth: any;
  applyStyle = false;
  unsubscribeAll: Subject<any>;

  version = environment.versions.app;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogReloadAppComponent>,
    public dialog: MatDialog,
    public translateService: TranslateService,
  ) {
    this.dialogRef.disableClose = true;
    this.unsubscribeAll = new Subject<any>();
  }

  onClose(): void {
    this.dialogRef.close(true);
  }
}
