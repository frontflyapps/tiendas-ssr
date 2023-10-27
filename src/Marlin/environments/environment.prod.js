const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://apitienda.marinasmarlin.com/v1/',
  imageUrl: 'https://cdntienda.marinasmarlin.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logos/marlin/azul/Logo-Marlin-192.png',
  logoWhite: 'assets/images/logo-wout-gen-white.png',
  logoFooter: 'assets/images/logo.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://tienda.marinasmarlin.com/',
  urlAboutUs: 'https://tienda.marinasmarlin.com/',

  address: 'Tiendas Marinas Marlin',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 7202 1381',
    email: 'tienda@marinasmarlin.com',
    address: 'Calle 2, esq 7ma, Miramar, Playa',
  },

  adminService: 'https://admintienda.marinasmarlin.com/',
  mainDomain: '.marinasmarlin.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMS0wNy0yMFQwMTo1NTozNC4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjI2NzQ2MTgzfQ.IgqpAt3ji4H5cPDKMavybmpMhibe31JDl9RJ2znQWk8',

  meta: {
    mainPage: {
      title: 'Tiendas Marinas Marlin',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://tienda.marinasmarlin.com/assets/images/share-img.png',
      url: 'https://tienda.marinasmarlin.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
