// peopleGoTo | transfermovil | bidaiondo
export const PASARELA_BASE = 'peoplegoto';

export const environment = {
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
  logo: 'assets/images/logo-black-gray.png',
  logoWhite: 'assets/images/logo-black-gray.png',
  logoFooter: 'assets/images/logo-black-gray.png',

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

  url: 'https://www.tiendapululu.com/',
  urlAboutUs: 'https://www.tiendapululu.com/',

  address: 'Tienda Apululu',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'http://admin.tiendapululu.com/',
  mainDomain: '.tiendapululu.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjExMiwiaWQiOjExMiwiZGF0ZSI6IjIwMjMtMDQtMjlUMTQ6NDk6MzUuMDk0WiIsIm5hbWUiOiJBcHVsdWx1IiwiZW1haWwiOiJwbGF0YWZvcm1hbG9naXN0aWNhLmhhYmFuYUBnbWFpbC5jb20ifSwiaWF0IjoxNjgyNzc5Nzc1fQ.0xYk2e5H1ifytoMGk53lgGeE52GaQ4Az4aPHxYJd_KM',

  meta: {
    mainPage: {
      title: 'Tienda Apululu',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.tiendapululu.com/assets/images/share-img.png',
      url: 'https://www.tiendapululu.com/',
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
