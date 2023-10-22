const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/Eriode.svg',
  logoWhite: 'assets/images/Eriode.svg',
  logoFooter: 'assets/images/Eriode.svg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://eriode.pymesbulevar.com/',
  urlAboutUs: 'https://eriode.pymesbulevar.com/',

  address: 'Empresa Agroindustrial La Ceiba',
  localDatabaseUsers: true,

  contacts: {
    email: 'dir.negocios@eriode.co.cu',
    address: 'Carretera a Venezuela Km 3 comunidad Plan Piña Ciego de Ávila',
    phone: '+53 5 9932594',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.eriode.pymesbulevar.com/',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjQ1LCJpZCI6NDUsImRhdGUiOiIyMDIyLTEwLTEyVDE0OjQ3OjE1LjExMVoiLCJuYW1lIjoiU29jaWVkYWQgTWVyY2FudGlsIEFncm9pbmR1c3RyaWFsIExhIENlaWJhIFNSTCIsImVtYWlsIjoiZGlyLm5lZ29jaW9zQGVyaW9kZS5jby5jdSJ9LCJpYXQiOjE2NjU1ODYwMzV9.zNoncRurHPi2eAAPtxcu6byNm6_WQU-aRFbn_dVZ-aU',

  meta: {
    mainPage: {
      title: 'Empresa Agroindustrial La Ceiba',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://eriode.pymesbulevar.com/assets/images/share-img.png',
      url: 'https://eriode.pymesbulevar.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
