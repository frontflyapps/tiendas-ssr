const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.havtel.com/v1/',
  imageUrl: 'https://cdntienda.havtel.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-navbar.svg',
  logoWhite: 'assets/images/logo-navbar.svg',
  logoFooter: 'assets/images/logo-navbar.svg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.havtel.com/',
  urlAboutUs: 'https://www.havtel.com/',

  address: 'HAVTEL | Tienda Online',
  localDatabaseUsers: true,

  contacts: {
    email: 'sales@havtel.com',
    address: 'Centro de Negocios Miramar, Edificio Barcelona oficina 201, Miramar, Playa.',
  },

  adminService: 'https://admin.havtel.com/',
  mainDomain: '.havtel.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMi0wOS0xNlQwNDowMzowOS4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjYzMzAxMDA2fQ.y50jX75MJTRMKlW7oNzdNIqu95MkY1_5n5f6Mzw2rEc',

  meta: {
    mainPage: {
      title: 'HAVTEL | Tienda Online',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.havtel.com/assets/images/share-img.png',
      url: 'https://www.havtel.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};