const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdn.mibulevar.com/tienda/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',

  logo: 'assets/images/mibulevar/etecsa/logo_80_wh.png',
  logoWhite: 'assets/images/mibulevar/etecsa/logo_80_wh.png',
  logoFooter: 'assets/images/mibulevar/etecsa/logo_80_wh.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.etecsa.mibulevar.com',
  urlAboutUs: 'https://www.etecsa.mibulevar.com',

  address: 'ETECSA SA | Sucursal Norte',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 7266 8364',
    email: 'atencion.usuarios@etecsa.cu',
    address: 'Centro de Negocios Miramar, Edificio Beijing, 4to Piso',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjksImlkIjo5LCJkYXRlIjoiMjAyMS0xMS0wN1QyMzowMTozNi42MDVaIiwibmFtZSI6IkVURUNTQSIsImVtYWlsIjoiYXRlbmNpb24udXN1YXJpb3NAZXRlY3NhLmN1In0sImlhdCI6MTYzNjMyNjA5Nn0.ywzFLYzBTA0o2LjM6Ppx4XOetOtjL2E7Hwj-D6UiwmA',

  meta: {
    mainPage: {
      title: 'ETECSA SA | Sucursal Norte',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.mibulevar.com/assets/images/share-img.png',
      url: 'https://www.etecsa.mibulevar.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};