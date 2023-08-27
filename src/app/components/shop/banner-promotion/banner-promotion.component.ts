import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-banner-promotion',
  templateUrl: './banner-promotion.component.html',
  styleUrls: ['./banner-promotion.component.scss'],
})
export class BannerPromotionComponent implements OnInit {
  imageUrl = environment.imageUrl;
  imageBigPromo = null;
  loadImage = true;
  contactUs;

  @Input() set _imageBigPromo(value) {
    if (value) {
      this.imageBigPromo = value;
    }
  }

  ngOnInit() {
    this.contactUs = environment.urlAboutUs;
  }
}
