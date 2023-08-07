import { Environment } from 'environments/types';

export const devOverrides: Partial<Environment> = {
  pasarelaBase: 'peoplegoto',

  production: false,

  // apiUrl: 'https://api.mibulevar.com/v1/',
  // imageUrl: 'https://api.mibulevar.com/v1/',

  // apiUrl: 'https://apitienda.guajiritos.com/v1/',
  // imageUrl: 'https://apitienda.guajiritos.com/v1/',

  // apiUrl: 'https://api.guajiritos.com/v1/',
  // imageUrl: 'https://cdntienda.guajiritos.com/',

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.veoveofashion.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-navbar.png',
  logoWhite: 'assets/images/logo-navbar.png',
  logoFooter: 'assets/images/logo-white-pink.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // Time to reset the session (ms)
  timeToResearchProductData: 10000, // Time to research products (ms)
  timeToResearchLandingPageData: 10000, // Time to research products (ms)
  timeToResearchMenuData: 10000, // Time to research products (ms)
  timeToResearchCategoriesData: 10000, // Time to research categories (ms)

  // url: 'http://tienda.tiendalocal.com:4308',
  // urlAboutUs: 'http://tienda.tiendalocal.com:4308',

  url: 'https://www.veoveofashion.com/',
  urlAboutUs: 'https://www.veoveofashion.com/',

  address: 'Veo Veo Fashion',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.veoveofashion.com/',
  mainDomain: '.veoveofashion.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjkxLCJpZCI6OTEsImRhdGUiOiIyMDIzLTAzLTE2VDAyOjMxOjU0LjMwNloiLCJuYW1lIjoiVmVvVmVvRmFzaGlvIiwiZW1haWwiOiJzaG9wQHZlb3Zlb2Zhc2hpb24uY29tIn0sImlhdCI6MTY3ODkzMzkxNH0.5_I2SBDb3cwH6ZI566RBYR_vo57H9dqotq0wsBTjOjg',

  meta: {
    mainPage: {
      title: 'Veo Veo Fashion',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords:
        'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.veoveofashion.com/assets/images/share-img.png',
      url: 'https://www.veoveofashion.com/',
    },
  },
};

export const prodOverrides: Partial<Environment> = {
  pasarelaBase: 'peoplegoto',

  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.veoveofashion.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-navbar.png',
  logoWhite: 'assets/images/logo-navbar.png',
  logoFooter: 'assets/images/logo-white-pink.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.veoveofashion.com/',
  urlAboutUs: 'https://www.veoveofashion.com/',

  address: 'Veo Veo Fashion',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.veoveofashion.com/',
  mainDomain: '.veoveofashion.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjkxLCJpZCI6OTEsImRhdGUiOiIyMDIzLTAzLTE2VDAyOjMxOjU0LjMwNloiLCJuYW1lIjoiVmVvVmVvRmFzaGlvIiwiZW1haWwiOiJzaG9wQHZlb3Zlb2Zhc2hpb24uY29tIn0sImlhdCI6MTY3ODkzMzkxNH0.5_I2SBDb3cwH6ZI566RBYR_vo57H9dqotq0wsBTjOjg',

  meta: {
    mainPage: {
      title: 'Veo Veo Fashion',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords:
        'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.veoveofashion.com/assets/images/share-img.png',
      url: 'https://www.veoveofashion.com/',
    },
  },
};
