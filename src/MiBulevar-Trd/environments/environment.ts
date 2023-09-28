// peopleGoTo | transfermovil | bidaiondo
export const PASARELA_BASE = 'peoplegoto';

export const environment = {
  production: false,

  // apiUrl: 'https://api.mibulevar.com/v1/',
  // imageUrl: 'https://api.mibulevar.com/v1/',

  apiUrl: 'https://api.guajiritos.com/v1/',
  imageUrl: 'https://cdntienda.guajiritos.com/v1/',

  // apiUrl: 'https://127.0.0.1:8997/v1/',
  // imageUrl: 'https://cdntienda.guajiritos.com/',

  // apiUrl: 'https://api.pymesbulevar.com/v1/',
  // imageUrl: 'https://cdntienda.pymesbulevar.com/',

  // apiUrl: 'http://apitienda.tiendalocal.com:8999/v1/',
  // imageUrl: 'http://cdntienda.guajiritos.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',

  limitSearch: 42,

  logo: 'assets/images/guajiritos/guajiritos-Logo-blanco.png',
  logoWhite: 'assets/images/logo-navbar.svg',
  logoFooter: 'assets/images/logo-navbar.svg',

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // Time to reset the session (ms)
  timeToResearchProductData: 10000, // Time to research products (ms)
  timeToResearchLandingPageData: 10000, // Time to research products (ms)
  timeToResearchMenuData: 10000, // Time to research products (ms)
  timeToResearchCategoriesData: 10000, // Time to research categories (ms)

  url: 'http://tienda.tiendalocal.com:4308',
  urlAboutUs: 'http://tienda.tiendalocal.com:4308',

  address: 'Mi Bulevar',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'http://admintienda.tiendalocal.com/',
  mainDomain: '.tiendalocal.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjMsImlkIjozLCJkYXRlIjoiMjAyMS0xMS0wN1QyMjoxODozMi4xODNaIiwibmFtZSI6IlRSRCBDYXJpYmUiLCJlbWFpbCI6Im1tdWxldEB0cmRjYXJpYmUuY28uY3UifSwiaWF0IjoxNjM2MzIzNTEyfQ.3tpg8yBrzHRC5JJGQpAeyLkS9p5OU4RexR4Baj5kE5Y',

  meta: {
    mainPage: {
      title: 'Mi Bulevar',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.mibulevar.com/assets/images/share-img.jpg',
      url: 'https://www.mibulevar.com/',
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
