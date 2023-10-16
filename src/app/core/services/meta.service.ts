import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

interface MetaArgs {
  title?: string;
  description?: string;
  shareImg?: string;
  keywords?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private meta: Meta) {}

  setMeta(args: MetaArgs) {
    const { title, description, shareImg, keywords, url } = args;

    this.meta.updateTag({
      name: 'title',
      content: title,
    });
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    this.meta.updateTag({
      name: 'keywords',
      content: keywords,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: url,
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: title,
    });
    this.meta.updateTag({
      property: 'og:image',
      itemprop: 'image primaryImageOfPage',
      content: shareImg,
    });

    this.meta.updateTag({
      property: 'twitter:domain',
      content: url,
    });
    this.meta.updateTag({
      property: 'twitter:title',
      content: title,
    });
    this.meta.updateTag({
      property: 'og:title',
      itemprop: 'name',
      content: title,
    });
    this.meta.updateTag({
      property: 'twitter:description',
      content: description,
    });
    this.meta.updateTag({
      property: 'og:description',
      itemprop: 'description',
      content: description,
    });
    this.meta.updateTag({
      property: 'twitter:image',
      content: shareImg,
    });
  }
}

// <meta property="og:site_name" content="Tienda online">
// <meta property="og:title" content="Tienda online">
// <meta property="og:description" content="Tienda online, negocios B2C and C2C">
// <meta property="og:image" content="https://www.domain.com/assets/images/share-img.png">
