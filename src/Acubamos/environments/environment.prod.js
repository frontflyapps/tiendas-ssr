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

  url: 'https://www.acubamos.net/',
  urlAboutUs: 'https://www.acubamos.net/',

  address: 'Acubamos',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.acubamos.net',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEwMSwiaWQiOjEwMSwiZGF0ZSI6IjIwMjMtMDQtMThUMTk6NTQ6MjcuMjc2WiIsIm5hbWUiOiJBY3ViYW1vcyIsImVtYWlsIjoiYWN1YmFtb3MucHltZXN1cmxAZ21haWwuY29tIn0sImlhdCI6MTY4MTg0NzY2N30.y227NEL1UmnA3R-fyPahQJe_yJIncbkVE67pG4wFKtc',

  meta: {
    mainPage: {
      title: 'Acubamos',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.acubamos.net/assets/images/share-img.png',
      url: 'https://www.acubamos.net/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};