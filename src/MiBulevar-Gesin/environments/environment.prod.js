const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdntienda.mibulevar.com/',

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

  url: 'https://tiendagesin.mibulevar.com/',
  urlAboutUs: 'https://tiendagesin.mibulevar.com/',

  address: 'Tienda Gesin',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.tiendagesin.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEwNSwiaWQiOjEwNSwiZGF0ZSI6IjIwMjMtMDYtMjFUMTQ6NTA6NDcuNzQzWiIsIm5hbWUiOiJUaWVuZGEgZGUgQXJ0w61jdWxvcyBHRVNJTiAiLCJlbWFpbCI6ImFkcmlhbi5wZXJlekBjb21lcmNpb2d0bS5jby5jdSJ9LCJpYXQiOjE2ODczNTkwNDd9.D7OYWTQClvqiDgL0zSQV4xe42BtMDwpw-uGRrb6mI4Y',

  meta: {
    mainPage: {
      title: 'Tienda Gesin',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://tiendagesin.mibulevar.com/assets/images/share-img.png',
      url: 'https://tiendagesin.mibulevar.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};