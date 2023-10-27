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

  url: 'https://www.piensooccidente.mibulevar.com/',
  urlAboutUs: 'https://www.piensooccidente.mibulevar.com/',

  address: 'Pienso Occidente | TransferMóvil',
  localDatabaseUsers: true,

  contacts: {
    email: 'bulevar@etecsa.cu',
    address: 'Centro de Negocios Miramar, Edificio Barcelona oficina 201, Miramar, Playa.',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.piensooccidente.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjE2LCJpZCI6MTYsImRhdGUiOiIyMDIyLTAyLTE4VDAzOjU1OjE2Ljk5OVoiLCJuYW1lIjoiQWxpZ2FuIiwiZW1haWwiOiJwcnVlYmFAcHJ1ZWJhLmNvbSJ9LCJpYXQiOjE2NDUxNTY1MTd9.M3qV3pWP-tRigCnpVf1bolbjxmc5h2-z7GK8QsDqs70',

  meta: {
    mainPage: {
      title: 'Pienso Occidente | TransferMóvil',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.piensooccidente.mibulevar.com/assets/images/share-img.jpg',
      url: 'https://www.piensooccidente.mibulevar.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
