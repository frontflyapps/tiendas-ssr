// peopleGoTo | transfermovil | bidaiondo
export const PASARELA_BASE = 'peoplegoto';

export const environment = {
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
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.umbralf.com/assets/images/share-img.png',
      url: 'https://www.umbralf.com/',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/**
 * Esto es la tienda Online B2b De Guajiritos
 */
