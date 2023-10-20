const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.mmcaribe.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/mmcaribe/guajiritos-Logo-blanco.png',
  logoWhite: 'assets/images/mmcaribe/logo_mm_blanco.png',
  logoFooter: 'assets/images/mmcaribe/logo mm2.svg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.mmcaribe.com/',
  urlAboutUs: 'https://www.mmcaribe.com/',

  address: 'MM Caribe SRL',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 50947720',
    email: 'administrador@pymesbulevar.com',
    address: 'Madrid, España',
  },

  adminService: 'https://adminmmcaribe.pymesbulevar.com/',
  mainDomain: '.mmcaribe.pymesbulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjQzLCJpZCI6NDMsImRhdGUiOiIyMDIyLTA5LTI3VDAzOjAzOjQ2LjgzOFoiLCJuYW1lIjoiTU1DYXJpYmUiLCJlbWFpbCI6ImFkbWluaXN0cmFkb3JAcHltZXNidWxldmFyLmNvbSJ9LCJpYXQiOjE2NjQyNDc4MjZ9.8X3y-N_6ZtUwWwTE887QxV42HQ1VrJpu8bQ160C-JO8',

  meta: {
    mainPage: {
      title: 'MM Caribe SRL',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://mmcaribe.pymesbulevar.com/assets/images/share-img.png',
      url: 'https://mmcaribe.pymesbulevar.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};