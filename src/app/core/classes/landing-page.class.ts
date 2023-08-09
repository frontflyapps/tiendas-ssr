import { BaseEntity, UnknownRecord } from './general.class';

export interface LandingPageCarrusel extends BaseEntity {
  title: UnknownRecord;
  subTitle: UnknownRecord;
  image: string;
  imageXs: string;
  colorTitle: string;
  link?: string;
  BusinessId: number;
}

export interface LandingPageBicon extends BaseEntity {
  title: UnknownRecord;
  subTitle: UnknownRecord;
  icon: 'work';
  BusinessId: 1;
}

export interface LandingPagePromotion extends BaseEntity {
  BusinessId: number;
  image: string;
  imageXs: string;
  CreatorId: number;
  type: 'bigBannerPromo1' | 'bigBannerPromo2';
  title: string;
  link: string;
}

export interface LandignPageData {
  carrusels: Array<LandingPageCarrusel>;
  bicons: Array<LandingPageBicon>;
  blogRecents: Array<UnknownRecord>;
  ourServices: Array<UnknownRecord>;
  promotions: Array<LandingPagePromotion>;
  countProducts: number;
  banner: Array<UnknownRecord>;
}
