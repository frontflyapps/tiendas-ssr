const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/pruebalo.png',
  logoWhite: 'assets/images/pruebalo.png',
  logoFooter: 'assets/images/pruebalo.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.tiendapruebalo.com/',
  urlAboutUs: 'https://www.tiendapruebalo.com/',

  address: 'Tienda Pruébalo',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.tiendapruebalo.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjc3LCJpZCI6NzcsImRhdGUiOiIyMDIzLTAyLTEyVDE2OjM0OjMyLjQwN1oiLCJuYW1lIjoiUHJ1w6liYWxvIiwiZW1haWwiOiJwcnVlYmFsb0BwcnVlYmFsby5uZXQifSwiaWF0IjoxNjc2MjE5NjcyfQ.xoJdmeXfNHuh50mD41JbdgHVU7klIrvv5JJ7gWv-h4w',

  meta: {
    mainPage: {
      title: 'Tienda Pruebalo',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.tiendapruebalo.com/assets/images/share-img.png',
      url: 'https://www.tiendapruebalo.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
