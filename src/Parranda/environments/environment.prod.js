const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://apitienda.cervezaparranda.com/v1/',
  imageUrl: 'https://cdntienda.cervezaparranda.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-navbar-white.png',
  logoWhite: 'assets/images/logo-navbar-white.png',
  logoFooter: 'assets/images/logo-navbar-white.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.cervezaparranda.com/',
  urlAboutUs: 'https://www.cervezaparranda.com/',

  address: 'Parranda',
  localDatabaseUsers: true,

  defaultMarket: {
    label: 'Habana',
    lat: 23.131268,
    lng: -82.3582717,
    draggable: true,
  },

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.cervezaparranda.com/',
  mainDomain: '.cervezaparranda.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMy0wNS0yM1QxODo0MDowNS4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjg0ODY4MTQyfQ.CmpPrIRDlNsvz7HfD60cZN9Y8DZ8fs_GyZKW0Erggyg',

  meta: {
    mainPage: {
      title: 'Parranda',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.cervezaparranda.com/assets/images/share-img.png',
      url: 'https://www.cervezaparranda.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};