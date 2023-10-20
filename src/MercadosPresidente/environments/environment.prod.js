const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/share-img.png',
  logoWhite: 'assets/images/share-img.png',
  logoFooter: 'assets/images/share-img.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://mercadospresidente.pymesbulevar.com/',
  urlAboutUs: 'https://mercadospresidente.pymesbulevar.com/',

  address: 'Mercados Presidente',
  localDatabaseUsers: true,

  contacts: {
    phone: '(305) 445-2145',
    email: 'administrativo@mercadospresidente.com',
    address: 'Presidente Supermarket #11, 4275 W Flager St, Miami, FL 33126',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.mercadospresidente.pymesbulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjUzLCJpZCI6NTMsImRhdGUiOiIyMDIyLTExLTI3VDE4OjEwOjE2LjUxNFoiLCJuYW1lIjoiTWVyY2Fkb3NQcmVzaWRlbnRlIiwiZW1haWwiOiJtZXJjYWRvc3ByZXNpZGVudGVAcHltZXNidWxldmFyLmNvbSJ9LCJpYXQiOjE2Njk1NzI2MTZ9.04SSqfge62TNsS44_bObqIDzLIyl0hUVxA012eq9sVw',

  meta: {
    mainPage: {
      title: 'Mercado Presidente | Tienda Online',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.guajiritos.com/assets/icons/icon-384x384.png',
      url: 'https://www.tienda.guajiritos.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};