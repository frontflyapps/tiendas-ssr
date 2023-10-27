const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-white.png',
  logoWhite: 'assets/images/logo-white.png',
  logoFooter: 'assets/images/logo-white.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.mercadomas.com/',
  urlAboutUs: 'https://www.mercadomas.com/',

  address: 'Mercado +',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.mercadomas.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjg4LCJpZCI6ODgsImRhdGUiOiIyMDIzLTAzLTA4VDA2OjIyOjQ1LjczNVoiLCJuYW1lIjoiQmF6YXJIYWJhbmEiLCJlbWFpbCI6ImF0ZW5jaW9uLmJhemFyaGFiYW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NzgyNTY1NjV9.EJknFMeOjfBYyNQ2pVy5YgDwX_aVVrC23AUArnu3nnU',

  meta: {
    mainPage: {
      title: 'Mercado +',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.mercadomas.com/assets/images/share-img.png',
      url: 'https://www.mercadomas.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
