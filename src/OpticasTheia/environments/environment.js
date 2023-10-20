// peopleGoTo | transfermovil | bidaiondo
const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: false,

  // apiUrl: 'https://api.mibulevar.com/v1/',
  // imageUrl: 'https://api.mibulevar.com/v1/',

  // apiUrl: 'https://apitienda.guajiritos.com/v1/',
  // imageUrl: 'https://apitienda.guajiritos.com/v1/',

  // apiUrl: 'https://api.guajiritos.com/v1/',
  // imageUrl: 'https://cdntienda.guajiritos.com/',

  // apiUrl: 'https://api.pymesbulevar.com/v1/',
  // imageUrl: 'https://cdntienda.pymesbulevar.com/',

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.opticastheia.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-white-new.png',
  logoWhite: 'assets/images/logo-white-large-new.png',
  logoFooter: 'assets/images/logo-white-new.png',

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

  url: 'https://www.opticastheia.com/',
  urlAboutUs: 'https://www.opticastheia.com/',

  address: 'Tienda Guajiritos',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'http://admin.opticastheia.com/',
  mainDomain: '.opticastheia.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjExNywiaWQiOjExNywiZGF0ZSI6IjIwMjMtMDUtMTVUMTU6Mjc6NTYuMTg5WiIsIm5hbWUiOiLDk3B0aWNhcyBUaGVpYSIsImVtYWlsIjoiY2FybG9zLnNhbnRhbmFAZ3VhamlyaXRvcy5jb20ifSwiaWF0IjoxNjg0MTY0NDc2fQ.fWmzcPO-tDJvgyt__xBb-Y15BSaHbdgYTjcs8nRMhHY',

  meta: {
    mainPage: {
      title: 'Tienda Guajiritos',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.opticastheia.com/assets/images/share-img.png',
      url: 'https://www.opticastheia.com/',
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
