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

  url: 'https://www.tiendalaluciana.com/',
  urlAboutUs: 'https://www.tiendalaluciana.com/',

  address: 'Tienda La Luciana',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.www.tiendalaluciana.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjg5LCJpZCI6ODksImRhdGUiOiIyMDIzLTAzLTA5VDE5OjM5OjA2LjA5MVoiLCJuYW1lIjoiTGEgTHVjaWFuYSIsImVtYWlsIjoidGllbmRhLmx1Y2lhbmE4NkBnbWFpbC5jb20ifSwiaWF0IjoxNjc4MzkwNzQ2fQ.C30xZnx0RD93u2axe7zufRiaSpybUBCI4rFx13j8ElY',

  meta: {
    mainPage: {
      title: 'Tienda Guajitech DEV',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.tiendalaluciana.com/assets/images/share-img.png',
      url: 'https://www.tiendalaluciana.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};