const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo.png',
  logoWhite: 'assets/images/logo.png',
  logoFooter: 'assets/images/logo.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.elferreterompm.com/',
  urlAboutUs: 'https://www.elferreterompm.com/',

  address: 'El Ferretero',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.elferreterompm.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjE1MywiaWQiOjE1MywiZGF0ZSI6IjIwMjMtMDctMTlUMTU6MTc6NDguNTE3WiIsIm5hbWUiOiJGZXJyZXRlcm8iLCJlbWFpbCI6ImluZm9AZWxmZXJyZXRlcm9tcG0uY29tIn0sImlhdCI6MTY4OTc3OTg2OH0.KNcd6nHLAPhFI68JQ9fZgNE1KXmlxeVTWDEe2gsuiGU',

  meta: {
    mainPage: {
      title: 'El Ferretero',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.elferreterompm.com/assets/images/share-img.png',
      url: 'https://www.elferreterompm.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
