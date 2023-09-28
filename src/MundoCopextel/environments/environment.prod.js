export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

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

  url: 'https://www.mundocopextel.com/',
  urlAboutUs: 'https://www.mundocopextel.com/',

  address: 'Copextel | Soluciones Integrales',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.mundocopextel.com/',
  mainDomain: '.mundocopextel.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEyMSwiaWQiOjEyMSwiZGF0ZSI6IjIwMjMtMDUtMThUMTY6MDU6MzkuMzcxWiIsIm5hbWUiOiJNdW5kb0NvcGV4dGVsIiwiZW1haWwiOiJtdW5kb2NvcGV4dGVsQHB5bWVzYnVsZXZhci5jb20ifSwiaWF0IjoxNjg0NDI1OTM5fQ.8iwNi3s93vc73NuBHlt7z-KGmG-zTPINXX_yssZRg5Y',

  meta: {
    mainPage: {
      title: 'Tienda Guajitech DEV',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.mundocopextel.com/assets/images/share-img.png',
      url: 'https://www.mundocopextel.com/',
    },
  },
};
