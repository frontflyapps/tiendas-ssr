const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-navbar.png',
  logoWhite: 'assets/images/logo-navbar.png',
  logoFooter: 'assets/images/logo-navbar.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.tiendabiancasrl.com/',
  urlAboutUs: 'https://www.tiendabiancasrl.com/',

  address: 'Bianca S.R.L.',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.tiendabiancasrl.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjE0MywiaWQiOjE0MywiZGF0ZSI6IjIwMjMtMDYtMTlUMTk6MzQ6NTEuOTI5WiIsIm5hbWUiOiJCaWFuY2EgU1JMIiwiZW1haWwiOiJiaWFuY2FzcmwyMUBnbWFpbC5jb20ifSwiaWF0IjoxNjg3MjAzMjkyfQ.S1r3sBRJlvId5FPxC6Eh6vqsvhuzCMGbWe9_X6E68hE',

  meta: {
    mainPage: {
      title: 'Bianca S.R.L.',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.tiendabiancasrl.com/assets/images/share-img.png',
      url: 'https://www.tiendabiancasrl.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};
