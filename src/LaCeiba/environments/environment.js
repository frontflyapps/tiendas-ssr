// peopleGoTo | transfermovil | bidaiondo
export const PASARELA_BASE = 'peoplegoto';

export const environment = {
  production: false,

  // apiUrl: 'https://api.mibulevar.com/v1/',
  // imageUrl: 'https://api.mibulevar.com/v1/',

  // apiUrl: 'https://apitienda.guajiritos.com/v1/',
  // imageUrl: 'https://apitienda.guajiritos.com/v1/',

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdn.pymesbulevar.com/',

  // apiUrl: 'http://apitienda.tiendalocal.com:8999/v1/',
  // imageUrl: 'http://cdntienda.guajiritos.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/Eriode.svg',
  logoWhite: 'assets/images/Eriode.svg',
  logoFooter: 'assets/images/Eriode.svg',

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

  address: 'Empresa Agroindustrial La Ceiba',
  localDatabaseUsers: true,

  contacts: {
    email: 'dir.negocios@eriode.co.cu',
    address: 'Carretera a Venezuela Km 3 comunidad Plan Piña Ciego de Ávila',
    phone: '+53 5 9932594',
  },

  adminService: 'http://admintienda.tiendalocal.com/',
  mainDomain: '.tiendalocal.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjQ1LCJpZCI6NDUsImRhdGUiOiIyMDIyLTEwLTEyVDE0OjQ3OjE1LjExMVoiLCJuYW1lIjoiU29jaWVkYWQgTWVyY2FudGlsIEFncm9pbmR1c3RyaWFsIExhIENlaWJhIFNSTCIsImVtYWlsIjoiZGlyLm5lZ29jaW9zQGVyaW9kZS5jby5jdSJ9LCJpYXQiOjE2NjU1ODYwMzV9.zNoncRurHPi2eAAPtxcu6byNm6_WQU-aRFbn_dVZ-aU',

  meta: {
    mainPage: {
      title: 'Empresa Agroindustrial La Ceiba',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://eriode.pymesbulevar.com/assets/images/share-img.png',
      url: 'https://eriode.pymesbulevar.com/',
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
