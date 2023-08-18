import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  setMeta(
    title = '',
    description = '',
    shareImg = '',
    keywords = '',
    url = environment?.meta?.mainPage?.url
  ) {
    const titleTag = document.querySelector('title');
    const metaDescriptionTag = document.querySelector(
      `meta[name="description"]`
    );
    const metaKeyWords = document.querySelector(`meta[name="keywords"]`);
    const ogSiteName = document.querySelector(`meta[property="og:site_name"]`);
    const ogTitle = document.querySelector(`meta[property="og:title"]`);
    const ogDescription = document.querySelector(
      `meta[property="og:description"]`
    );
    const ogImage = document.querySelector(`meta[property="og:image"]`);
    const ogUrl = document.querySelector(`meta[property="og:url"]`);

    if (title) {
      if (titleTag) {
        titleTag.innerText = title;
      }
      if (ogSiteName) {
        ogSiteName.setAttribute('content', title);
      }
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }
    }
    if (description) {
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', description);
      }
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
    }
    if (keywords) {
      if (metaKeyWords) {
        metaKeyWords.setAttribute('content', keywords);
      }
    }
    if (shareImg) {
      if (ogImage) {
        ogImage.setAttribute('content', shareImg);
      }
    }
    if (url) {
      if (ogUrl) {
        ogUrl.setAttribute('content', url);
      }
    }
  }
}

// <meta property="og:site_name" content="Tienda online">
// <meta property="og:title" content="Tienda online">
// <meta property="og:description" content="Tienda online, negocios B2C and C2C">
// <meta property="og:image" content="https://www.domain.com/assets/images/share-img.png">
