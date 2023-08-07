import { Environment } from 'environments/types';

export const devOverrides: Partial<Environment> = {
  pasarelaBase: 'peoplegoto',

  production: false,

  // apiUrl: 'https://api.mibulevar.com/v1/',
  // imageUrl: 'https://api.mibulevar.com/v1/',

  // apiUrl: 'https://apitienda.guajiritos.com/v1/',
  // imageUrl: 'https://apitienda.guajiritos.com/v1/',

  apiUrl: 'https://api.guajiritos.com/v1/',
  imageUrl: 'https://cdntienda.guajiritos.com/',

  // apiUrl: 'https://api.pymesbulevar.com/v1/',
  // imageUrl: 'https://cdn.pymesbulevar.com/',

  // apiUrl: 'http://apitienda.tiendalocal.com:8998/v1/',
  // imageUrl: 'http://cdntienda.guajiritos.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-umbral.svg',
  logoWhite: 'assets/images/logo-umbral.svg',
  logoFooter: 'assets/images/logo-umbral.svg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // Time to reset the session (ms)
  timeToResearchProductData: 10000, // Time to research products (ms)
  timeToResearchLandingPageData: 10000, // Time to research products (ms)
  timeToResearchMenuData: 10000, // Time to research products (ms)
  timeToResearchCategoriesData: 10000, // Time to research categories (ms)

  url: 'http://tienda.pymesbulevar.com:4308',
  urlAboutUs: 'http://tienda.pymesbulevar.com:4308',

  address: 'Umbralf',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 59878295',
    email: 'administrador@pymesbulevar.com',
    address: 'Madrid, España',
  },

  adminService: 'http://admintienda.tiendalocal.com/',
  mainDomain: '.umbralf.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMi0wMS0zMVQwNDo1NDowMC4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjQzNjQ2Njg3fQ.-pIQscQih10E1-UbtTlyiV3mj_uaxilPMpvLLN-GzSo',

  meta: {
    mainPage: {
      title: 'Umbral',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords:
        'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.umbralf.com/assets/images/share-img.png',
      url: 'https://www.umbralf.com/',
    },
  },
};

export const prodOverrides: Partial<Environment> = {
  pasarelaBase: 'peoplegoto',

  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.umbralf.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-umbral.svg',
  logoWhite: 'assets/images/logo-umbral.svg',
  logoFooter: 'assets/images/logo-umbral.svg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.umbralf.com/',
  urlAboutUs: 'https://www.umbralf.com/',

  address: 'Umbral',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.umbralf.com/',
  mainDomain: '.umbralf.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjM1LCJpZCI6MzUsImRhdGUiOiIyMDIyLTA4LTIyVDAzOjA1OjU4Ljc1NVoiLCJuYW1lIjoiVW1icmFsIiwiZW1haWwiOiJ5b2VmZXIxOEBnbWFpbC5jb20ifSwiaWF0IjoxNjYxMTM3NTU4fQ.aofytpVf2OT7HUNrIGVSVp_JiPH5twgP25fVE0H84Ok',

  meta: {
    mainPage: {
      title: 'Umbral | Tienda Online',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords:
        'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.umbralf.com/assets/images/share-img.png',
      url: 'https://www.umbralf.com/',
    },
  },
};
