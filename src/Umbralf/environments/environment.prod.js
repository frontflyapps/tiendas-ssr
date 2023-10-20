const PASARELA_BASE = 'peoplegoto';

const environment = {
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
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.umbralf.com/assets/images/share-img.png',
      url: 'https://www.umbralf.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};