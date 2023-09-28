export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.tiendaspalmares.com/v1/',
  imageUrl: 'https://cdntienda.tiendaspalmares.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/palmares/logo.png',
  logoWhite: 'assets/images/palmares/logo-blanco.png',
  logoFooter: 'assets/images/palmares/logo-blanco.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://wwww.tiendaspalmares.com/',
  urlAboutUs: 'https://wwww.tiendaspalmares.com/',

  address: 'Tienda Palmares',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 836 01 01 - 04 ext. 1025 / 1102',
    email: 'dir.comercial@gee.palmares.cu',
    address: 'Línea No. 60, esquina a M, Vedado, Plaza de la Revolución.',
  },

  adminService: 'https://admintienda.tiendaspalmares.com/',
  mainDomain: '.tiendaspalmares.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMi0wNS0yMVQxNjozOTo1Ny4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjUzMTUxMjEwfQ.zFMJOvc5keKazIbkqHdbLyUMS8FZLmx2tAdxdg84NgA',

  meta: {
    mainPage: {
      title: 'Tiendas Palmares',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://wwww.tiendaspalmares.com/assets/images/share-img.png',
      url: 'https://wwww.tiendaspalmares.com/',
    },
  },
};
