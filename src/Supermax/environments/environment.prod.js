const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymebulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymebulevar.com/',

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

  url: 'https://supermax.pymesbulevar.com/',
  urlAboutUs: 'https://supermax.pymesbulevar.com/',

  address: 'Supermax',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.supermax.pymesbulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjE0MSwiaWQiOjE0MSwiZGF0ZSI6IjIwMjMtMDYtMDdUMjA6MTU6MjYuMjU5WiIsIm5hbWUiOiJTdXBlck1heCBEaXN0cmlidXRvciIsImVtYWlsIjoic3VwZXJtYXhAcHltZXNidWxldmFyLmNvbSJ9LCJpYXQiOjE2ODYxNjg5MjZ9.4Nc7_r9AJf_Xn61WNl3IcNT6gHlvfxnyjRqbVLmhE9Y',

  meta: {
    mainPage: {
      title: 'Supermax',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.supermax.pymesbulevar.com/assets/images/share-img.png',
      url: 'https://www.supermax.pymesbulevar.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
