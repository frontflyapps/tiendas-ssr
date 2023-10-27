import { Component, HostListener, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { environment } from 'environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-confirm-create-business',
  templateUrl: './confirm-create-business.component.html',
  styleUrls: ['./confirm-create-business.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatToolbarModule, MatDialogModule, MatButtonModule, MatIconModule, TranslateModule],
})
export class ConfirmCreateBusinessComponent implements OnInit {
  innerWidth: any;
  applyStyle = false;
  bussiness = environment.address;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmCreateBusinessComponent>,
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // TODO fix this comment (Cupull)
    // this.innerWidth = window.innerWidth;
    // this.applyStyle = this.innerWidth <= 600;
  }

  ngOnInit(): void {
    this.onResize('event');
  }
}
