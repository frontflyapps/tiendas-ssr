import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ProductService } from '../../../../shared/services/product.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-zoom',
  templateUrl: './product-zoom.component.html',
  styleUrls: ['./product-zoom.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
})
export class ProductZoomComponent implements OnInit {
  public count = 10;
  public maxWidth = 80;

  @ViewChild('zoomImage', { static: true }) zoomImage;

  constructor(
    private productsService: ProductService,
    public dialogRef: MatDialogRef<ProductZoomComponent>,
    @Inject(MAT_DIALOG_DATA) public image: any,
  ) {}

  ngOnInit() {
    this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
  }

  public close(): void {
    this.dialogRef.close();
  }

  public zoomIn() {
    if (this.maxWidth < 100) {
      this.maxWidth = this.maxWidth + this.count;
      this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
    }
  }

  public zoomOut() {
    if (this.maxWidth > 80) {
      this.maxWidth = this.maxWidth - this.count;
      this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
    }
  }
}
