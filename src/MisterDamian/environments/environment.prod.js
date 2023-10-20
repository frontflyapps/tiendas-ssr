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

  url: 'https://www.misterdamian.com/',
  urlAboutUs: 'https://www.misterdamian.com/',

  address: 'Mister Damian',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.misterdamian.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjg1LCJpZCI6ODUsImRhdGUiOiIyMDIzLTAyLTI3VDE5OjA3OjE2LjQ4MVoiLCJuYW1lIjoiUHJvZHVjdG9zIE1pc3RlciBEYW1pYW4gKExhdmFuZGVyw61hTGFOdWV2YSkiLCJlbWFpbCI6InByb2R1Y3Rvc21pc3RlcmRhbWlhbkBnbWFpbC5jb20ifSwiaWF0IjoxNjc3NTI0ODM2fQ.LgF_u0zavxURonrWGb8vti5EQdWP30jCxSpsBrqHdt4',

  meta: {
    mainPage: {
      title: 'Mister Damian',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.misterdamian.com/assets/images/share-img.png',
      url: 'https://www.misterdamian.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};