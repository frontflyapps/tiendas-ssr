export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-black-gray.png',
  logoWhite: 'assets/images/logo-black-gray.png',
  logoFooter: 'assets/images/logo-black-gray.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.tiendapululu.com/',
  urlAboutUs: 'https://www.tiendapululu.com/',

  address: 'Tienda Apululu',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.tiendapululu.com/',
  mainDomain: '.tienda.tiendapululu.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjExMiwiaWQiOjExMiwiZGF0ZSI6IjIwMjMtMDQtMjlUMTQ6NDk6MzUuMDk0WiIsIm5hbWUiOiJBcHVsdWx1IiwiZW1haWwiOiJwbGF0YWZvcm1hbG9naXN0aWNhLmhhYmFuYUBnbWFpbC5jb20ifSwiaWF0IjoxNjgyNzc5Nzc1fQ.0xYk2e5H1ifytoMGk53lgGeE52GaQ4Az4aPHxYJd_KM',

  meta: {
    mainPage: {
      title: 'Tienda Apululu',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.tiendapululu.com/assets/images/share-img.png',
      url: 'https://www.tiendapululu.com/',
    },
  },
};
