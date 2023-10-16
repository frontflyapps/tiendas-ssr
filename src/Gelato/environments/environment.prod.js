export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/Logo-Blanco.png',
  logoWhite: 'assets/images/Logo-Blanco.png',
  logoFooter: 'assets/images/Logo-Blanco.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://gelato.pymesbulevar.comv',
  urlAboutUs: 'https://gelato.pymesbulevar.com/',

  address: 'El Gelato | Heladería Dulcería',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.gelato.pymesbulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjcwLCJpZCI6NzAsImRhdGUiOiIyMDIzLTAyLTAyVDA1OjAxOjA0LjkxM1oiLCJuYW1lIjoiRWwgR2VsYXRvIiwiZW1haWwiOiJlbGdlbGF0b0BnbWFpbC5jb20ifSwiaWF0IjoxNjc1MzE0MDY0fQ.WphTYzEwL6QPFPgCtSGG4olB4GSg3rcnSwVb03E-NLY',

  meta: {
    mainPage: {
      title: 'Tienda Guajitech DEV',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://gelato.pymesbulevar.com/assets/images/share-img.png',
      url: 'https://gelato.pymesbulevar.com/',
    },
  },
};
