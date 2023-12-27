import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GuajiritosImagePicker, ImagePickerConf } from '@guajiritos/image-picker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-guachos-image',
  templateUrl: './guachos-image.component.html',
  styleUrls: ['./guachos-image.component.scss'],
  standalone: true,
  imports: [NgIf, MatButtonModule, MatIconModule, GuajiritosImagePicker],
})
export class GuachosImageComponent {
  @Input() imageSrc: any;
  @Input() config?: ImagePickerConf;
  @Input() isEdit = false;
  @Input() create?: boolean;
  @Output() imageChanged: EventEmitter<any> = new EventEmitter<any>();
  editing = false;

  constructor() {}

  onImageChange(event: any) {
    this.isEdit = false;
    this.imageChanged.emit(event);
  }

  onEdit(isEdit: boolean) {
    if (isEdit) {
      this.isEdit = false;
      this.editing = false;
    } else {
      this.isEdit = true;
      this.editing = true;
    }
  }
}
