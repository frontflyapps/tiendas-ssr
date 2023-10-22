const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.tiendascaracol.com/v1/',
  imageUrl: 'https://cdntienda.tiendascaracol.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo.svg',
  logoWhite: 'assets/images/logoWhite.png',
  logoFooter: 'assets/images/logoWhite.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.tiendascaracol.com/',
  urlAboutUs: 'https://www.tiendascaracol.com/',

  address: 'Tiendas Caracol S.A.',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 7202-27-96',
    email: 'atencionacliente@caracol.cu',
    address: 'Calle 1era # 2003 e/ 20 y 22, Miramar, Playa',
  },

  adminService: 'https://admin.tiendascaracol.com/',
  mainDomain: '.tiendascaracol.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMS0wNy0yN1QwNDowNTozNS4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjI3MzU5NDAwfQ.JCSfiu3yksemrTBVt02WFCZ6eyII133uk77nYr7w7ys',

  meta: {
    mainPage: {
      title: 'Tiendas Caracol S.A.',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords:
        'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online En Cuba',
      shareImg: 'https://www.tiendascaracol.com/assets/images/share-img.png',
      url: 'https://www.tiendascaracol.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
