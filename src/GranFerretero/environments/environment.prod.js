export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-navbar.svg',
  logoWhite: 'assets/images/logo-navbar.svg',
  logoFooter: 'assets/images/Logo-Footer.svg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.granferretero.com/',
  urlAboutUs: 'https://www.granferretero.com/',

  address: 'Gran Ferretero',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.grancomercial.com/',
  mainDomain: '.granferretero.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjk1LCJpZCI6OTUsImRhdGUiOiIyMDIzLTAzLTIyVDAyOjE2OjQ2LjcwMVoiLCJuYW1lIjoiR3JhbiBGZXJyZXRlcm8iLCJlbWFpbCI6ImNvbWVyY2lhbEBncmFuZmVycmV0ZXJvLmN1In0sImlhdCI6MTY3OTQ1MTQwNn0.AEe49kCc4JDvtULlHcFahqPYrChfwXSGTO-2aMKTd0s',

  meta: {
    mainPage: {
      title: 'Tienda Gran Terretero',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.granferretero.com/assets/images/share-img.png',
      url: 'https://www.granferretero.com/',
    },
  },
};
