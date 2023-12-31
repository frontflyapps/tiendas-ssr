const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdn.mibulevar.com/tienda/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',

  logo: 'assets/images/guajiritos/guajiritos-Logo-blanco.png',
  logoWhite: 'assets/images/logo-navbar.svg',
  logoFooter: 'assets/images/logo-navbar.svg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.mibulevar.com',
  urlAboutUs: 'https://www.mibulevar.com',

  address: 'MiBulevar | Transfermóvil',
  localDatabaseUsers: true,

  contacts: {
    email: 'bulevar@etecsa.cu',
    address: 'Centro de Negocios Miramar, Edificio Barcelona oficina 201, Miramar, Playa.',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjYxLCJpZCI6NjEsImRhdGUiOiIyMDIyLTA2LTI3VDIwOjIzOjU5LjQwM1oiLCJuYW1lIjoiQ29tZXJjaW8gTWlub3Jpc3RhIENpZW5mdWVnb3MiLCJlbWFpbCI6Im1laWxpLmhlcm5uYWRlekBnZWNjLmNvLmN1In0sImlhdCI6MTY1NjM2MTQzOX0.iW0tQMfs2Y1yrz1y2Qe88ZNp84uvY3fDoFirx-TlZ7Y',

  meta: {
    mainPage: {
      title: 'MiBulevar | Transfermóvil',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.mibulevar.com/assets/images/share-img.png',
      url: 'https://www.mibulevar.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
