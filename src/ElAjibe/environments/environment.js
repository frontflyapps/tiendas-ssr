// peopleGoTo | transfermovil | bidaiondo
const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: false,

  // apiUrl: 'https://api.mibulevar.com/v1/',
  // imageUrl: 'https://api.mibulevar.com/v1/',

  // apiUrl: 'https://api.guajiritos.com/v1/',
  // imageUrl: 'https://cdntienda.guajiritos.com/',
  //
  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  // apiUrl: 'http://apitienda.tiendalocal.com:8997/v1/',
  // imageUrl: 'http://cdntienda.guajiritos.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/aljibe.png',
  logoWhite: 'assets/images/aljibe.png',
  logoFooter: 'assets/images/aljibe.png',

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

  url: 'http://tienda.guajiritos.com:4308/',
  urlAboutUs: 'http://tienda.guajiritos.com:4308/',

  address: 'Tienda Guajiritos',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'http://admintienda.tiendalocal.com/',
  mainDomain: '.tiendalocal.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjIsImlkIjoyLCJkYXRlIjoiMjAyMi0wNS0yN1QyMToxNDo0NS40NTVaIiwibmFtZSI6IkVsIEFsamliZSIsImVtYWlsIjoiZ2lzZWxsZWdnQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTM2ODYwODV9.i5zfm80T54dCWKpyZcnDIP1pGLBfjceKV0Fzo93mt2E',

  meta: {
    mainPage: {
      title: 'Tienda Guajiritos',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://guajiritos.com/assets/images/share-img.png',
      url: 'https://www.tienda.guajiritos.com/',
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

module.exports = {
  PASARELA_BASE,
  environment,
};
