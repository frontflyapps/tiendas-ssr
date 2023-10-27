const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://apitienda.mcvcommercial.com/v1/',
  imageUrl: 'https://cdntienda.mcvcommercial.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo.png',
  logoWhite: 'assets/images/logo.png',
  logoFooter: 'assets/images/logo.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://tienda.mcvcommercial.com/',
  urlAboutUs: 'https://tienda.mcvcommercial.com/',

  address: 'MCV Comercial S.A.',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admintienda.mcvcommercial.com/',
  mainDomain: '.mcvcommercial.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMS0wNC0xOVQwNjo1Njo1OC4wMDBaIiwibmFtZSI6IlRpZW5kYSBNVkMiLCJlbWFpbCI6InRpZW5kYUBsb2NhbGhvc3QuY29tIn0sImlhdCI6MTYxODgxNjI0M30.abwxFg1bAoLpbITHpVL3zxtEpuX4igT5eJE-fD5gkE8',

  meta: {
    mainPage: {
      title: 'MCV Comercial S.A.',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords:
        'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online En Cuba',
      shareImg: 'https://tienda.mcvcommercial.com/assets/images/share-img.png',
      url: 'https://tienda.mcvcommercial.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
