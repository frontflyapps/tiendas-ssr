const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/pymesbulevar/logo-r.png',
  logoWhite: 'assets/images/pymesbulevar/logo-r-white.png',
  logoFooter: 'assets/images/pymesbulevar/logo-r-white.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.pymesbulevar.com/',
  urlAboutUs: 'https://www.pymesbulevar.com/',

  googleAnalyticsId: 'G-89XMR5BEXV',

  address: 'Pymes Bulevar | Suba su negocio',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 5 0928310',
    email: 'comunicación@pymesbulevar.com',
    address: 'Madrid, España',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.pymesbulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMi0wMS0zMVQwNDo1NDowMC4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjQzNjQ2Njg3fQ.-pIQscQih10E1-UbtTlyiV3mj_uaxilPMpvLLN-GzSo',

  meta: {
    mainPage: {
      title: 'Pymes Bulevar | Suba su negocio',
      description:
        '🛍️Marketplace online para Cuba🇨🇺. Alimentos, aseo, ferretería, electrónica, piezas para autos y motos y más.',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.pymesbulevar.com/assets/images/share-img.png',
      url: 'https://www.pymesbulevar.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};