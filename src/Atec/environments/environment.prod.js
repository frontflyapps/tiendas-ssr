const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-navbar-white.png',
  logoWhite: 'assets/images/logo-navbar-white.png',
  logoFooter: 'assets/images/logo-footer-white.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.poliservicioatec.com/',
  urlAboutUs: 'https://www.poliservicioatec.com/',

  address: 'ATEC',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.poliservicioatec.com/',
  mainDomain: '.poliservicioatec.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjE0NSwiaWQiOjE0NSwiZGF0ZSI6IjIwMjMtMDYtMjJUMTg6NTU6MjIuODk5WiIsIm5hbWUiOiJJbmR1c3RyaWEgRWxlY3Ryw7NuaWNhIiwiZW1haWwiOiJ5b2plbmlzLmdvbnphbGV6QGVpZS5jby5jdSJ9LCJpYXQiOjE2ODc0NjAxMjJ9.ApK4g6Sdzi0JnhVha1m0L1nLFlPcXQ_LAsXm_Czf_Ys',

  meta: {
    mainPage: {
      title: 'ATEC',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.poliservicioatec.com/assets/images/share-img.png',
      url: 'https://www.poliservicioatec.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
