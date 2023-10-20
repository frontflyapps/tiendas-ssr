const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.tiendaspalmares.com/v1/',
  imageUrl: 'https://cdntienda.tiendaspalmares.com/',

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

  url: 'https://elaljibe.tiendaspalmares.com/',
  urlAboutUs: 'https://elaljibe.tiendaspalmares.com/',

  address: 'El Aljibe',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.tiendaspalmares.com/',
  mainDomain: '.tiendaspalmares.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjIsImlkIjoyLCJkYXRlIjoiMjAyMi0wNS0yN1QyMToxNDo0NS40NTVaIiwibmFtZSI6IkVsIEFsamliZSIsImVtYWlsIjoiZ2lzZWxsZWdnQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTM2ODYwODV9.i5zfm80T54dCWKpyZcnDIP1pGLBfjceKV0Fzo93mt2E',

  meta: {
    mainPage: {
      title: 'Tienda Guajitech DEV',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://elaljibe.tiendaspalmares.com/assets/images/share-img.png',
      url: 'https://elaljibe.tiendaspalmares.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};