import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GuachosImagePickerModule } from 'guachos-image-picker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

export interface ImageConf {
  width?: string;
  height?: string;
  borderRadius?: string;
  domain?: string;
  compressInitial?: boolean;
  language?: string;
  hideDeleteBtn?: boolean;
  hideDownloadBtn?: boolean;
  hideEditBtn?: boolean;
  hideAddBtn?: boolean;
}
@Component({
  selector: 'app-guachos-image',
  templateUrl: './guachos-image.component.html',
  styleUrls: ['./guachos-image.component.scss'],
  standalone: true,
  imports: [NgIf, MatButtonModule, MatIconModule, GuachosImagePickerModule],
})
export class GuachosImageComponent implements OnInit {
  @Input() imageSrc: any;
  @Input() config?: ImageConf;
  @Input() isEdit = false;
  @Input() create?: boolean;
  @Output() imageChanged: EventEmitter<any> = new EventEmitter<any>();
  editing = false;

  constructor() {}

  ngOnInit(): void {}

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
