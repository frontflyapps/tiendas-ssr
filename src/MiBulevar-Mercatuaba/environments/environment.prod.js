const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdn.mibulevar.com/tienda/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-navbar.png',
  logoWhite: 'assets/images/logo-navbar.png',
  logoFooter: 'assets/images/logo-navbar.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://mercatuaba.mibulevar.com',
  urlAboutUs: 'https://mercatuaba.mibulevar.com',

  address: 'Media Luna | Agroinsdutrial',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.mibulevar.com',
  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjIyLCJpZCI6MjIsImRhdGUiOiIyMDIyLTAyLTE4VDA0OjAyOjMxLjgxMloiLCJuYW1lIjoibWVkaWFsdW5hIiwiZW1haWwiOiJwcnVlYmFAcHJ1ZWJhLmNvbSJ9LCJpYXQiOjE2NDUxNTY5NTF9.RwKrqZd7IfluUJg7lWHb8LZHfIxYSDROxXED9Fn5Zqg',
  meta: {
    mainPage: {
      title: 'Media Luna | Agroinsdutrial',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://medialuna.mibulevar.com/assets/images/share-img.png',
      url: 'https://medialuna.mibulevar.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
